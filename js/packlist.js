// ── PACKLIST.JS ──
// Toevoegen aan en verwijderen uit de inpaklijst.

function getPackList() {
  return loadPackList();
}

function isInPackList(itemId) {
  return getPackList().includes(itemId);
}

function togglePackItem(itemId) {
  const list = getPackList();
  const updated = list.includes(itemId)
    ? list.filter(id => id !== itemId)
    : [...list, itemId];
  savePackList(updated);
  return updated;
}

function clearPackList() {
  savePackList([]);
}

function removeFromPackList(itemId) {
  const list = getPackList().filter(id => id !== itemId);
  savePackList(list);
}
