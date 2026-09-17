// Wraps page.html (artifact form: head bits at top, then body) into a full index.html.
import { readFileSync, writeFileSync } from 'node:fs';
const src = readFileSync(new URL('./page.html', import.meta.url), 'utf8');
const m = src.match(/<!--HEAD-->([\s\S]*?)<!--\/HEAD-->([\s\S]*)$/);
if (!m) throw new Error('HEAD markers missing');
const [, head, body] = m;
const og = `
<meta property="og:title" content="Cheat Code Studios">
<meta property="og:description" content="Content strategy and production built for rapid viewership growth and media profitability. Enter a code.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.cheatcodeagency.com/">
<meta name="theme-color" content="#0a0912">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%230a0912'/%3E%3Ctext x='16' y='22' text-anchor='middle' font-family='monospace' font-size='16' font-weight='700' fill='%23ffc44d'%3E%E2%86%91%3C/text%3E%3C/svg%3E">`;
writeFileSync(new URL('./index.html', import.meta.url),
`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">${head.trim() ? '\n' + head.trim() : ''}${og}
<style>[hidden]{display:none!important}</style>
</head>
<body>
${body.trim()}
</body>
</html>
`);
console.log('wrote index.html');
