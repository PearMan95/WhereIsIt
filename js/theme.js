// ── THEME.JS ──
// Licht/donker thema en accentkleur beheer.

// Iconen voor zon (licht) en maan (donker)
const ICON_SUN  = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
const ICON_MOON = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.getElementById('themeIcon');
  if (icon) icon.innerHTML = theme === 'dark' ? ICON_MOON : ICON_SUN;
}

function applyAccentColor(color) {
  document.documentElement.style.setProperty('--accent', color);

  // Bepaal of de tekst op de accentkleur wit of donker moet zijn (op basis van helderheid)
  const contrast = getContrastColor(color);
  document.documentElement.style.setProperty('--accent-contrast', contrast);

  // Update de kleurpicker knop
  const btn = document.getElementById('accentPickerBtn');
  if (btn) btn.style.background = color;

  const input = document.getElementById('accentColorInput');
  if (input) input.value = color;
}

// Berekent of wit of donker beter leesbaar is op een gegeven hexkleur
function getContrastColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  // Relatieve helderheid via WCAG-formule
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#1c1c1e' : '#ffffff';
}

function toggleTheme() {
  const s     = loadSettings();
  s.theme     = s.theme === 'dark' ? 'light' : 'dark';
  saveSettings(s);
  applyTheme(s.theme);
}

function initTheme() {
  const s = loadSettings();
  applyTheme(s.theme || 'light');
  applyAccentColor(s.accentColor || '#1a2e4a');
}