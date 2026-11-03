// ── STORAGE.JS ──
// Alle communicatie met localStorage zit hier.
// Andere bestanden roepen deze functies aan; ze raken localStorage nooit direct aan.

const KEYS = {
  items:      'wii_items',
  locations:  'wii_locations',
  categories: 'wii_categories',
  packList:   'wii_pack',
  settings:   'wii_settings',
};

const DEFAULT_LOCATIONS = [
  { id: 'loc_a', name: 'Locatie A', color: '#1a2e4a' },
  { id: 'loc_b', name: 'Locatie B', color: '#c0394b' },
];

const DEFAULT_CATEGORIES = [
  'Kleding', 'Elektronica', 'Sport', 'School', 'Persoonlijk', 'Overig',
];

const DEFAULT_SETTINGS = {
  sortField: 'name',
  sortDir:   'asc',
};

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Items
function loadItems()       { return loadJSON(KEYS.items, []); }
function saveItems(items)  { saveJSON(KEYS.items, items); }

// Locaties
function loadLocations()            { return loadJSON(KEYS.locations, DEFAULT_LOCATIONS); }
function saveLocations(locations)   { saveJSON(KEYS.locations, locations); }

// Categorieën
function loadCategories()           { return loadJSON(KEYS.categories, DEFAULT_CATEGORIES); }
function saveCategories(cats)       { saveJSON(KEYS.categories, cats); }

// Inpaklijst
function loadPackList()             { return loadJSON(KEYS.packList, []); }
function savePackList(list)         { saveJSON(KEYS.packList, list); }

// Instellingen
function loadSettings()             { return { ...DEFAULT_SETTINGS, ...loadJSON(KEYS.settings, {}) }; }
function saveSettings(settings)     { saveJSON(KEYS.settings, settings); }

// Alles in één keer exporteren (voor de export-functie)
function exportAll() {
  return {
    items:      loadItems(),
    locations:  loadLocations(),
    categories: loadCategories(),
    packList:   loadPackList(),
    settings:   loadSettings(),
    exportedAt: new Date().toISOString(),
  };
}

// Alles in één keer importeren (voor de import-functie)
function importAll(data) {
  if (data.items)      saveItems(data.items);
  if (data.locations)  saveLocations(data.locations);
  if (data.categories) saveCategories(data.categories);
  if (data.packList)   savePackList(data.packList);
  if (data.settings)   saveSettings(data.settings);
}
