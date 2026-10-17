// Post-build script: inline the CSS bundle into dist/index.html
// The app renders client-side, so a deferred (media="print") stylesheet could arrive after React's
// first render and the page flashed unstyled for a moment. The CSS is small (~5.5 KB gzip), so
// inlining it removes both that flash and the render-blocking stylesheet request.

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const distPath = join(process.cwd(), 'dist');
const htmlPath = join(distPath, 'index.html');
let html = readFileSync(htmlPath, 'utf-8');

html = html.replace(
  /<link rel="stylesheet"[^>]*href="\/(assets\/[^"]+\.css)"[^>]*>/g,
  (_, cssFile) => `<style>${readFileSync(join(distPath, cssFile), 'utf-8')}</style>`
);

writeFileSync(htmlPath, html);
console.log('✅ CSS inlined successfully in dist/index.html');
