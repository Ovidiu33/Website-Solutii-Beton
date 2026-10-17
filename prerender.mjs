// Post-build script: render the page to static HTML so the content is in dist/index.html before any JavaScript runs.
// The client bundle then hydrates the same markup (src/main.tsx).
// Because the page is already complete, the bundle starts only once the window "load" event has fired and the first
// content has been painted (with a 3 s fallback): the hero photo and the font get the bandwidth and the main thread
// first, while links, phone/WhatsApp buttons and the FAQ already work without JavaScript.

import { readFileSync, writeFileSync, rmSync } from 'fs';
import { join } from 'path';
import { pathToFileURL } from 'url';

const distPath = join(process.cwd(), 'dist');
const ssrPath = join(process.cwd(), 'dist-ssr');
const htmlPath = join(distPath, 'index.html');

const { render } = await import(pathToFileURL(join(ssrPath, 'entry-server.js')).href);
let html = readFileSync(htmlPath, 'utf-8');
if (!html.includes('<div id="root"></div>')) throw new Error('root placeholder not found in dist/index.html');

html = html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`);

const entry = html.match(/<script type="module" crossorigin src="([^"]+)"><\/script>/);
if (!entry) throw new Error('entry script not found in dist/index.html');
const loader = `(function(){var loaded=0,painted=0,started=0;function start(){if(started||!loaded||!painted)return;started=1;setTimeout(function(){var s=document.createElement('script');s.type='module';s.src='${entry[1]}';document.head.appendChild(s)},0)}addEventListener('load',function(){loaded=1;start();setTimeout(function(){painted=1;start()},3000)});try{new PerformanceObserver(function(list){if(list.getEntriesByName('first-contentful-paint').length){painted=1;start()}}).observe({type:'paint',buffered:true})}catch(e){painted=1}})()`;
html = html
  .replace(entry[0], `<script>${loader}</script>`)
  .replace(/<link rel="modulepreload" crossorigin href="[^"]+">\s*/g, '');

writeFileSync(htmlPath, html);
rmSync(ssrPath, { recursive: true, force: true });
console.log('✅ Page prerendered into dist/index.html (bundle starts after load + first paint)');
