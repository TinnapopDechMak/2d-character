import { access } from 'node:fs/promises';
for (const file of ['dist/index.html','dist/style.css','dist/app.js']) await access(file);
console.log('Static build ready: dist/');
