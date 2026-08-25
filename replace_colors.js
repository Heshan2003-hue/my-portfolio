const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// Colors
// emerald-300: #6ee7b7 -> gold-300: #fde047
// emerald-400: #34d399 -> gold-400: #facc15
// emerald-500: #10b981 -> gold-500: #eab308
// emerald-600: #059669 -> gold-600: #ca8a04
// emerald-800: #065f46 -> gold-800: #854d0e
// emerald-950: #022c22 -> gold-950: #422006

// teal-300: #5eead4 -> gold-300: #fde047
// teal-400: #2dd4bf -> gold-400: #facc15
// teal-500: #14b8a6 -> gold-500: #eab308
// teal-950: #042f2e -> gold-950: #422006

// Replace var(--emerald-xxx) with var(--gold-xxx)
css = css.replace(/--emerald-/g, '--gold-');
css = css.replace(/--teal-/g, '--gold-');

// Main text to #FFFFFF
// Currently color: var(--slate-100) or similar. Let's redefine slate vars
// or replace the actual values in the :root?
// Wait, the prompt says "Set the secondary background color... to Dark Gray (#171717)"
// "Primary Text: ... pure White (#FFFFFF)"
// "Secondary Text: ... Light Gray (#A3A3A3)"
// Let's redefine the root variables.

css = css.replace(/--bg-dark-900: #070e17;/g, '--bg-dark-900: #171717;'); // not exactly, let's just do it directly.

fs.writeFileSync('style.css_new', css);
