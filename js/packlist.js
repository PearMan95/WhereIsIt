// ── PACKLIST.JS ──
// Inpaklijst: elk item heeft een bestemming (destinationId).
// Opgeslagen als array van { itemId, destinationId } objecten.

function getPackList() {
  return loadPackList();
}

function isInPackList(itemId) {
  return getPackList().some(e => e.itemId === itemId);
}

function getPackEntry(itemId) {
  return getPackList().find(e => e.itemId === itemId) || null;
}

// Voegt item toe met bestemming, of verwijdert het als het er al in zit
function togglePackItem(itemId, destinationId) {
  const list = getPackList();
  const existing = list.findIndex(e => e.itemId === itemId);
  let updated;
  if (existing !== -1) {
    updated = list.filter(e => e.itemId !== itemId);
  } else {
    updated = [...list, { itemId, destinationId: destinationId || null }];
  }
  savePackList(updated);
  return updated;
}

// Voegt toe met bestemming, of update de bestemming als het er al in zit
function addToPackList(itemId, destinationId) {
  const list    = getPackList();
  const existing = list.findIndex(e => e.itemId === itemId);
  let updated;
  if (existing !== -1) {
    updated = list.map(e => e.itemId === itemId ? { ...e, destinationId } : e);
  } else {
    updated = [...list, { itemId, destinationId }];
  }
  savePackList(updated);
  return updated;
}

function removeFromPackList(itemId) {
  const list = getPackList().filter(e => e.itemId !== itemId);
  savePackList(list);
}

function updatePackDestination(itemId, destinationId) {
  const list = getPackList().map(e =>
    e.itemId === itemId ? { ...e, destinationId } : e
  );
  savePackList(list);
}

function clearPackList() {
  savePackList([]);
}

// Verplaatst alle items op de inpaklijst naar hun bestemming.
// Slaat items over zonder bestemming en geeft die terug als gemiste items.
function moveAllPackItems() {
  const list   = getPackList();
  const missed = [];

  list.forEach(entry => {
    if (!entry.destinationId) {
      missed.push(entry.itemId);
      return;
    }
    updateItem(entry.itemId, { locationId: entry.destinationId });
  });

  // Verwijder alleen de items die wél verplaatst zijn
  const remaining = list.filter(e => !e.destinationId || missed.includes(e.itemId));
  savePackList(remaining);

  return { moved: list.length - missed.length, missed };
}