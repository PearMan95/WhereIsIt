// ── CATEGORIES.JS ──
// Aanmaken en verwijderen van categorieën.

function getCategories() {
  return loadCategories();
}

function addCategory(name) {
  const cats = getCategories();
  const trimmed = name.trim();
  if (!trimmed || cats.includes(trimmed)) return false;
  cats.push(trimmed);
  saveCategories(cats);
  return true;
}

// Verwijdert een categorie.
// deleteItems: als true worden gekoppelde items verwijderd.
function removeCategory(name, deleteItems) {
  let items = loadItems();

  if (deleteItems) {
    items = items.filter(i => i.category !== name);
    saveItems(items);
  }

  const cats = getCategories().filter(c => c !== name);
  saveCategories(cats);
}
