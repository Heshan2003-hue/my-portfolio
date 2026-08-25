const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// The user requested cards, About Me banner, and timeline item containers to be solid #171717
// Currently they use var(--glass-bg), linear-gradient for the banner, etc.
css = css.replace(/--glass-bg: rgba\(23, 23, 23, 0\.75\);/g, '--glass-bg: #171717;');
css = css.replace(/--glass-bg-hover: rgba\(30, 30, 30, 0\.85\);/g, '--glass-bg-hover: #262626;');
css = css.replace(/background: linear-gradient\(135deg, rgba\(23, 23, 23, 0\.85\), rgba\(0, 0, 0, 0\.45\)\);/g, 'background: #171717;');
css = css.replace(/background: rgba\(23, 23, 23, 0\.6\);/g, 'background: #171717;');
css = css.replace(/background: rgba\(23, 23, 23, 0\.4\);/g, 'background: #171717;');

fs.writeFileSync('style.css', css);
