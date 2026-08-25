const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// Replace emerald and teal variables with gold
css = css.replace(/--emerald-300: #[0-9a-fA-F]+;/g, '--gold-300: #fde047;');
css = css.replace(/--emerald-400: #[0-9a-fA-F]+;/g, '--gold-400: #facc15;');
css = css.replace(/--emerald-500: #[0-9a-fA-F]+;/g, '--gold-500: #eab308;');
css = css.replace(/--emerald-600: #[0-9a-fA-F]+;/g, '--gold-600: #ca8a04;');
css = css.replace(/--emerald-800: #[0-9a-fA-F]+;/g, '--gold-800: #854d0e;');
css = css.replace(/--emerald-950: #[0-9a-fA-F]+;/g, '--gold-950: #422006;');

css = css.replace(/--teal-300: #[0-9a-fA-F]+;/g, '');
css = css.replace(/--teal-400: #[0-9a-fA-F]+;/g, '');
css = css.replace(/--teal-500: #[0-9a-fA-F]+;/g, '');
css = css.replace(/--teal-950: #[0-9a-fA-F]+;/g, '');

css = css.replace(/--emerald-/g, '--gold-');
css = css.replace(/--teal-/g, '--gold-');

// Primary text color: White #FFFFFF
// Secondary text color: Light Gray #A3A3A3
css = css.replace(/--slate-100: #[0-9a-fA-F]+;/g, '--slate-100: #FFFFFF;'); 
css = css.replace(/--slate-200: #[0-9a-fA-F]+;/g, '--slate-200: #F5F5F5;'); 
css = css.replace(/--slate-300: #[0-9a-fA-F]+;/g, '--slate-300: #D4D4D4;'); 
css = css.replace(/--slate-400: #[0-9a-fA-F]+;/g, '--slate-400: #A3A3A3;'); 

// Update background colors
// Main background: #000000
css = css.replace(/--bg-black: #[0-9a-fA-F]+;/g, '--bg-black: #000000;');
css = css.replace(/--bg-dark-950: #[0-9a-fA-F]+;/g, '--bg-dark-950: #000000;');
css = css.replace(/--bg-dark-900: #[0-9a-fA-F]+;/g, '--bg-dark-900: #171717;');
css = css.replace(/--bg-dark-800: #[0-9a-fA-F]+;/g, '--bg-dark-800: #171717;');

// Update glass background colors
css = css.replace(/--glass-bg: rgba\(7, 18, 13, 0\.75\);/g, '--glass-bg: rgba(23, 23, 23, 0.75);');
css = css.replace(/--glass-bg-hover: rgba\(10, 28, 20, 0\.85\);/g, '--glass-bg-hover: rgba(30, 30, 30, 0.85);');
css = css.replace(/--glass-border: rgba\(16, 185, 129, 0\.12\);/g, '--glass-border: rgba(250, 204, 21, 0.12);');
css = css.replace(/--glass-border-hover: rgba\(16, 185, 129, 0\.35\);/g, '--glass-border-hover: rgba(250, 204, 21, 0.35);');
css = css.replace(/--glass-shadow-hover: 0 15px 35px -10px rgba\(16, 185, 129, 0\.2\);/g, '--glass-shadow-hover: 0 15px 35px -10px rgba(250, 204, 21, 0.2);');

// The about quick bar has a linear-gradient hardcoded:
css = css.replace(/background: linear-gradient\(135deg, rgba\(15, 23, 42, 0\.85\), rgba\(2, 44, 34, 0\.45\)\);/g, 'background: linear-gradient(135deg, rgba(23, 23, 23, 0.85), rgba(0, 0, 0, 0.45));');
// The quick bar border:
css = css.replace(/border: 1px solid rgba\(16, 185, 129, 0\.25\);/g, 'border: 1px solid rgba(250, 204, 21, 0.25);');
// The quick bar icon background:
css = css.replace(/background: rgba\(2, 44, 34, 0\.8\);/g, 'background: rgba(30, 30, 30, 0.8);');
// The quick bar icon border:
css = css.replace(/border: 1px solid rgba\(16, 185, 129, 0\.35\);/g, 'border: 1px solid rgba(250, 204, 21, 0.35);');

// Some other hardcoded rgbas that might be emerald: rgba(52, 211, 153, 0.5)
css = css.replace(/rgba\(52, 211, 153, 0\.5\)/g, 'rgba(250, 204, 21, 0.5)'); // hover text shadow
css = css.replace(/rgba\(45, 212, 191, 0\.6\)/g, 'rgba(250, 204, 21, 0.6)'); // hover border bottom
css = css.replace(/rgba\(16, 185, 129, /g, 'rgba(250, 204, 21, '); // general emerald replacement
css = css.replace(/rgba\(52, 211, 153, /g, 'rgba(250, 204, 21, '); // general emerald-400 replacement
css = css.replace(/rgba\(45, 212, 191, /g, 'rgba(250, 204, 21, '); // general teal-400 replacement

fs.writeFileSync('style.css', css);
console.log("Done.");
