const fs = require('fs');
const js = fs.readFileSync('script.js', 'utf8');
const regex = /\bfetch\b/gi;
let match;
while ((match = regex.exec(js)) !== null) {
  console.log(`Found fetch in script.js at index ${match.index}`);
}
console.log('Done parsing JS.');
