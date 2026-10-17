// Post-build script to defer CSS loading
// This modifies dist/index.html to use media="print" trick for non-blocking CSS

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const htmlPath = join(process.cwd(), 'dist', 'index.html');
let html = readFileSync(htmlPath, 'utf-8');

// Replace stylesheet links with deferred loading pattern
html = html.replace(
  /<link rel="stylesheet"([^>]+)>/g,
  '<link rel="stylesheet"$1 media="print" onload="this.media=\'all\'; this.onload=null;">'
);

// Add noscript fallback
html = html.replace(
  /<link rel="stylesheet"([^>]+) media="print"([^>]+)>/g,
  (match) => {
    const stylesheetMatch = match.match(/href="([^"]+)"/);
    if (stylesheetMatch) {
      const href = stylesheetMatch[1];
      return `${match}\n    <noscript><link rel="stylesheet" href="${href}"></noscript>`;
    }
    return match;
  }
);

writeFileSync(htmlPath, html);
console.log('✅ CSS deferred successfully in dist/index.html');
