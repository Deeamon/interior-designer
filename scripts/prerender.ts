import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const distDir = resolve(import.meta.dirname, '..', 'dist');
const templatePath = resolve(distDir, 'index.html');

const template = readFileSync(templatePath, 'utf-8');

// Dynamic import of the built server entry
const { render } = await import(resolve(distDir, 'server', 'entry-server.js'));

const routes = ['/'];

for (const url of routes) {
  const appHtml = render(url) as string;
  const html = template.replace('<!--ssr-outlet-->', appHtml);

  const outPath = url === '/'
    ? resolve(distDir, 'index.html')
    : resolve(distDir, url.slice(1), 'index.html');

  writeFileSync(outPath, html);
  console.log(`Prerendered: ${url} → ${outPath}`);
}

// Copy index.html as 404.html for SPA fallback on GitHub Pages
const indexHtml = readFileSync(resolve(distDir, 'index.html'), 'utf-8');
writeFileSync(resolve(distDir, '404.html'), indexHtml);
console.log('Created 404.html SPA fallback');
