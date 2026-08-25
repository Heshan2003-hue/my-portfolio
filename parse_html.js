const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const regex = /\b(id|name)\s*=\s*(["']?)(.*?)\2/gi;
let match;
while ((match = regex.exec(html)) !== null) {
  if (match[3].toLowerCase() === 'fetch') {
    console.log(`Found fetch in: ${match[0]}`);
  }
}
console.log('Done parsing HTML.');
