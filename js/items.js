// ── ITEMS.JS ──
// Aanmaken, bewerken, verwijderen van items en het bijhouden van geschiedenis.

function itemUid() {
  return 'item_' + Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function getItems() {
  return loadItems();
}

function getItemById(id) {
  return getItems().find(i => i.id === id) || null;
}

function createItem({ name, locationId, category, note, img }) {
  const now = new Date().toISOString();
  const item = {
    id:         itemUid(),
    name:       name.trim(),
    locationId,
    category,
    note:       note?.trim() || '',
    img:        img || null,
    createdAt:  now,
    updatedAt:  now,
    history:    [],
  };
  const items = getItems();
  items.unshift(item);
  saveItems(items);
  return item;
}

function updateItem(id, { name, locationId, category, note, img }) {
  const items = getItems();
  const idx   = items.findIndex(i => i.id === id);
  if (idx === -1) return null;

  const old = items[idx];
  const now = new Date().toISOString();
  const history = [...(old.history || [])];

  // Verplaatst naar andere locatie? Voeg toe aan geschiedenis.
  if (locationId && locationId !== old.locationId) {
    history.push({
      type:     'move',
      from:     old.locationId,
      to:       locationId,
      date:     now,
    });
  }

  // Andere wijziging (naam, notitie, foto, categorie)?
  const otherChange =
    (name      && name.trim()  !== old.name)     ||
    (category  && category     !== old.category) ||
    (note      !== undefined   && note.trim() !== old.note) ||
    (img       !== undefined   && img !== old.img);

  if (otherChange) {
    history.push({
      type: 'edit',
      date: now,
    });
  }

  items[idx] = {
    ...old,
    name:       name?.trim()   ?? old.name,
    locationId: locationId     ?? old.locationId,
    category:   category       ?? old.category,
    note:       note?.trim()   ?? old.note,
    img:        img !== undefined ? img : old.img,
    updatedAt:  now,
    history,
  };

  saveItems(items);
  return items[idx];
}

function deleteItem(id) {
  const items = getItems().filter(i => i.id !== id);
  saveItems(items);

  // Verwijder ook uit de inpaklijst
  const pack = loadPackList().filter(i => i !== id);
  savePackList(pack);
}

// Geeft de leesbare geschiedenis terug voor weergave in de UI
function getItemHistory(item) {
  if (!item.history || !item.history.length) return [];
  return item.history.map(entry => {
    if (entry.type === 'move') {
      const from = getLocationName(entry.from);
      const to   = getLocationName(entry.to);
      const date = formatDate(entry.date);
      return `Voor het laatst verplaatst op ${date} van ${from} naar ${to}`;
    }
    if (entry.type === 'edit') {
      const date = formatDate(entry.date);
      return `Voor het laatst aangepast op ${date}`;
    }
    return null;
  }).filter(Boolean).reverse(); // Meest recent bovenaan
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('nl-NL', {
    day:   '2-digit',
    month: 'long',
    year:  'numeric',
  });
}
