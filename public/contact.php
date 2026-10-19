<?php
// Primește cererile din formularul de contact și le trimite pe email, direct de pe server
// (înlocuiește EmailJS, a cărui conexiune Gmail expira și bloca formularul).
// Hostico are mail() dezactivat, așa că trimitem prin SMTP autentificat pe serverul local.
// Datele de autentificare stau în afara public_html (și în afara git): ~/ecarota-smtp.php

const TO = 'contact@ecarota.ro';
const SERVICES = [
    'carotaj' => 'Carotare în beton',
    'taiere' => 'Tăiere beton',
    'demontare' => 'Demolări',
    'altele' => 'Altceva',
];

header('Content-Type: application/json; charset=utf-8');

function respond(int $code, bool $ok): void
{
    http_response_code($code);
    echo json_encode(['ok' => $ok]);
    exit;
}

// Client SMTP minimal (SSL + AUTH LOGIN); întoarce true dacă serverul a acceptat mesajul
function smtp_send(array $cfg, string $to, string $message): bool
{
    // Conexiune locală pe același server, deci certificatul nu e emis pentru „localhost”
    $context = stream_context_create(['ssl' => ['verify_peer' => false, 'verify_peer_name' => false]]);
    $socket = @stream_socket_client("ssl://{$cfg['host']}:{$cfg['port']}", $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $context);
    if (!$socket) {
        return false;
    }
    $expect = function (string $code) use ($socket): bool {
        do {
            $line = fgets($socket, 515);
            if ($line === false) {
                return false;
            }
        } while (isset($line[3]) && $line[3] === '-');
        return strncmp($line, $code, 3) === 0;
    };
    $send = function (string $command, string $code) use ($socket, $expect): bool {
        fwrite($socket, $command . "\r\n");
        return $expect($code);
    };
    $ok = $expect('220')
        && $send('EHLO ecarota.ro', '250')
        && $send('AUTH LOGIN', '334')
        && $send(base64_encode($cfg['user']), '334')
        && $send(base64_encode($cfg['pass']), '235')
        && $send("MAIL FROM:<{$cfg['user']}>", '250')
        && $send("RCPT TO:<$to>", '250')
        && $send('DATA', '354')
        && $send(preg_replace('/^\./m', '..', $message) . "\r\n.", '250');
    $send('QUIT', '221');
    fclose($socket);
    return $ok;
}

// Notificare WhatsApp (Meta Cloud API, șablon aprobat) pe telefoanele noastre, ca rezervă la email.
// Datele de acces stau tot în afara public_html și a git: ~/ecarota-whatsapp.php
// Fără acel fișier (sau dacă API-ul nu răspunde) formularul merge mai departe doar cu emailul.
function whatsapp_notify(array $values): void
{
    $file = dirname(__DIR__) . '/ecarota-whatsapp.php';
    if (!is_file($file) || !function_exists('curl_init')) {
        return;
    }
    $cfg = require $file;
    // Parametrii din șablon nu au voie să conțină linii noi, tab-uri sau multe spații la rând
    $params = array_map(fn($v) => ['type' => 'text', 'text' => preg_replace('/\s+/', ' ', $v)], $values);
    foreach ($cfg['to'] as $to) {
        $ch = curl_init("https://graph.facebook.com/{$cfg['version']}/{$cfg['phone_id']}/messages");
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . $cfg['token'], 'Content-Type: application/json'],
            CURLOPT_POSTFIELDS => json_encode([
                'messaging_product' => 'whatsapp',
                'to' => $to,
                'type' => 'template',
                'template' => [
                    'name' => $cfg['template'],
                    'language' => ['code' => 'ro'],
                    'components' => [['type' => 'body', 'parameters' => $params]],
                ],
            ]),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CONNECTTIMEOUT => 3,
            CURLOPT_TIMEOUT => 5,
        ]);
        $response = curl_exec($ch);
        $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error = curl_error($ch);
        curl_close($ch);
        if ($code !== 200) {
            // Fără date personale în log: doar codul și mesajul de eroare de la Meta
            error_log("WhatsApp: HTTP $code " . (json_decode((string)$response, true)['error']['message'] ?? $error));
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, false);
}

// Câmp ascuns, completat doar de boți
if (!empty($_POST['website'])) {
    respond(200, true);
}

// Câmpurile pe un singur rând nu au voie să conțină linii noi (protecție la injectarea de headere)
function field(string $key, int $max, bool $multiline = false): string
{
    $value = trim(mb_substr((string)($_POST[$key] ?? ''), 0, $max));
    return $multiline ? $value : preg_replace('/[\r\n]+/', ' ', $value);
}

$name = field('name', 100);
$phone = field('phone', 30);
$email = field('email', 120);
$service = SERVICES[field('service', 20)] ?? '';
$message = field('message', 3000, true);

if ($name === '' || $phone === '' || $service === '' || $message === ''
    || ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL))) {
    respond(422, false);
}

// Limită: maxim 5 mesaje la 10 minute de pe același IP
$ip = $_SERVER['REMOTE_ADDR'] ?? '';
$rateFile = sys_get_temp_dir() . '/ecarota-form-' . md5($ip);
$recent = array_filter(explode(',', (string)@file_get_contents($rateFile)), fn($t) => (int)$t > time() - 600);
if (count($recent) >= 5) {
    respond(429, false);
}
$recent[] = time();
@file_put_contents($rateFile, implode(',', $recent));

$subject = "Cerere ofertă: $service – $name";
$body = "Nume: $name\n"
    . "Telefon: $phone\n"
    . 'Email: ' . ($email !== '' ? $email : '-') . "\n"
    . "Serviciu: $service\n\n"
    . "Mesaj:\n$message\n\n"
    . "--\nTrimis din formularul de pe https://ecarota.ro la " . date('d.m.Y H:i') . " (IP: $ip)\n";

$smtp = require dirname(__DIR__) . '/ecarota-smtp.php';

$headers = [
    'Date: ' . date('r'),
    'Message-ID: <' . bin2hex(random_bytes(16)) . '@ecarota.ro>',
    'From: =?UTF-8?B?' . base64_encode('Formular ecarota.ro') . '?= <' . $smtp['user'] . '>',
    'To: <' . TO . '>',
    'Subject: =?UTF-8?B?' . base64_encode($subject) . '?=',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
];
if ($email !== '') {
    $headers[] = "Reply-To: $email";
}

$sent = smtp_send($smtp, TO, implode("\r\n", $headers) . "\r\n\r\n" . chunk_split(base64_encode($body)));
// Mesajul din șablon are maxim 1024 de caractere, deci o descriere lungă se scurtează aici (rămâne întreagă în email)
$short = mb_strlen($message) > 550 ? mb_substr($message, 0, 550) . '… (continuarea în email)' : $message;
whatsapp_notify([$service, $name, $phone, $email !== '' ? $email : '-', $short]);
respond($sent ? 200 : 500, $sent);
