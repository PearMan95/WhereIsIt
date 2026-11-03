// ── LOCATIONS.JS ──
// Aanmaken, bewerken en verwijderen van locaties.

// Automatisch een kleur genereren op basis van de index
const AUTO_COLORS = [
  '#1a2e4a', '#c0394b', '#2e7d32', '#e65100',
  '#6a1b9a', '#00838f', '#4e342e', '#1565c0',
];

function getAutoColor(index) {
  return AUTO_COLORS[index % AUTO_COLORS.length];
}

function uid() {
  return 'loc_' + Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function getLocations() {
  return loadLocations();
}

function getLocationById(id) {
  return getLocations().find(l => l.id === id) || null;
}

function getLocationName(id) {
  return getLocationById(id)?.name || 'Onbekend';
}

function addLocation(name) {
  const locations = getLocations();
  const newLoc = {
    id:    uid(),
    name:  name.trim(),
    color: getAutoColor(locations.length),
  };
  locations.push(newLoc);
  saveLocations(locations);
  return newLoc;
}

function updateLocation(id, name, color) {
  const locations = getLocations();
  const idx = locations.findIndex(l => l.id === id);
  if (idx === -1) return;
  locations[idx] = { ...locations[idx], name: name.trim(), color };
  saveLocations(locations);
}

// Verwijdert een locatie. Geeft de locatienaam terug zodat de aanroeper een bevestiging kan tonen.
// deleteItems: als true worden gekoppelde items verwijderd, anders worden ze niet verwijderd.
function removeLocation(id, deleteItems) {
  let items = loadItems();

  if (deleteItems) {
    items = items.filter(i => i.locationId !== id);
  }
  // Items zonder locatie krijgen geen nieuwe locatie — ze worden gewoon niet meer getoond
  // tenzij de gebruiker kiest om ze te bewaren. In dat geval laten we ze staan zonder locatie.
  saveItems(items);

  const locations = getLocations().filter(l => l.id !== id);
  saveLocations(locations);
}

// Geeft een CSS-kleurwaarde terug voor een locatie-id
function getLocationColor(id) {
  return getLocationById(id)?.color || '#888';
}

// Geeft een lichte variant van de kleur terug (gebruikt voor tags)
function getLocationLightColor(id) {
  const color = getLocationColor(id);
  return hexToLight(color);
}

// Zet een hexkleur om naar een lichte achtergrondkleur (door opacity te simuleren op wit)
function hexToLight(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const lr = Math.round(r + (255 - r) * 0.85);
  const lg = Math.round(g + (255 - g) * 0.85);
  const lb = Math.round(b + (255 - b) * 0.85);
  return `rgb(${lr},${lg},${lb})`;
}
