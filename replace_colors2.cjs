const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

css = css.replace(/rgba\(2, 44, 34, /g, 'rgba(30, 30, 30, ');
css = css.replace(/rgba\(4, 47, 46, /g, 'rgba(30, 30, 30, ');

fs.writeFileSync('style.css', css);
