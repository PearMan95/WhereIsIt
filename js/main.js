// ── MAIN.JS ──
// Event listeners en initialisatie. Alles komt hier samen.

// ── ITEM ACTIES (aangeroepen vanuit de kaarten via onclick) ──

// Opent de locatie-popup bij de pakketje-knop
function onTogglePackPopup(event, itemId) {
  event.stopPropagation();
  const wrap = event.currentTarget.closest('.pack-popup-wrap');
  if (_activePopup?.itemId === itemId) { closePackPopup(); return; }
  showPackPopup(itemId, wrap);
}

// Gebruiker kiest een bestemming in de popup
function onPickPackDest(itemId, destinationId) {
  const wasInList = isInPackList(itemId);
  const prevEntry = wasInList ? { ...getPackEntry(itemId) } : null;

  addToPackList(itemId, destinationId);
  closePackPopup();
  renderAll();

  const destName = getLocationName(destinationId);
  const msg = wasInList
    ? `Bestemming gewijzigd naar ${destName}`
    : `Toegevoegd aan inpaklijst (naar ${destName})`;

  showToast(msg, () => {
    if (!wasInList) {
      removeFromPackList(itemId);
    } else if (prevEntry) {
      addToPackList(itemId, prevEntry.destinationId);
    }
    renderAll();
    if ($('packModal').classList.contains('open')) renderPackModal();
  });

  if ($('packModal').classList.contains('open')) renderPackModal();
}

// Verwijdert item uit inpaklijst (vanuit modal of popup)
function onRemoveFromPack(itemId) {
  const prevEntry = getPackEntry(itemId);
  removeFromPackList(itemId);
  closePackPopup();
  renderAll();
  if ($('packModal').classList.contains('open')) renderPackModal();

  showToast('Verwijderd uit inpaklijst', () => {
    if (prevEntry) addToPackList(prevEntry.itemId, prevEntry.destinationId);
    renderAll();
    if ($('packModal').classList.contains('open')) renderPackModal();
  });
}

// Update bestemming vanuit de dropdown in de inpaklijst-modal
function onUpdatePackDest(itemId, destinationId) {
  updatePackDestination(itemId, destinationId || null);
  if ($('packModal').classList.contains('open')) renderPackModal();
  renderPackBanner();
}

// Verplaats alle items naar hun bestemming
function onMoveAll() {
  // Snapshot van items en inpaklijst vóór de actie, voor undo
  const itemsSnapshot   = JSON.stringify(getItems());
  const packSnapshot    = JSON.stringify(getPackList());

  const { moved, missed } = moveAllPackItems();
  const s = loadSettings();
  if (s.clearPackAfterMove) clearPackList();
  renderAll();
  renderPackModal();

  const msg = missed.length
    ? `${moved} item(s) verplaatst, ${missed.length} zonder bestemming overgeslagen.`
    : `${moved} item(s) verplaatst naar hun bestemming.`;

  showToast(msg, () => {
    // Herstel items en inpaklijst naar de toestand van vóór de actie
    saveItems(JSON.parse(itemsSnapshot));
    savePackList(JSON.parse(packSnapshot));
    renderAll();
    renderPackModal();
  });
}

function onOpenHistory(itemId) {
  renderHistoryModal(itemId);
  openModal('historyModal');
}

function onOpenEdit(itemId) {
  openItemModalEdit(itemId);
}

function onOpenDelete(itemId) {
  openDeleteModal(itemId);
}

function onSetSort(field) {
  setSortState(field);
  $('sortDropdown').classList.remove('open');
}

function onToggleSortDir() {
  const s = loadSettings();
  s.sortDir = s.sortDir === 'asc' ? 'desc' : 'asc';
  saveSettings(s);
  renderAll();
}

// ── LOCATIE ACTIES (vanuit instellingen) ──
function onSaveLocation(id) {
  const name  = $(`loc-name-${id}`)?.value?.trim();
  const color = $(`loc-color-${id}`)?.value;
  if (!name) return;
  updateLocation(id, name, color);
  renderAll();
  renderLocationsSettings();
}

function onDeleteLocation(id) {
  const loc  = getLocationById(id);
  const name = loc?.name || 'deze locatie';
  const items = getItems().filter(i => i.locationId === id);

  if (items.length) {
    const deleteItems = confirm(
      `Er zijn ${items.length} item(s) gekoppeld aan "${name}".\n\nKlik OK om de items ook te verwijderen, of Annuleren om alleen de locatie te verwijderen.`
    );
    removeLocation(id, deleteItems);
  } else {
    if (!confirm(`Weet je zeker dat je "${name}" wil verwijderen?`)) return;
    removeLocation(id, false);
  }

  renderAll();
  renderLocationsSettings();
}

// ── CATEGORIE ACTIES (vanuit instellingen) ──
function onDeleteCategory(name) {
  const items = getItems().filter(i => i.category === name);

  if (items.length) {
    const deleteItems = confirm(
      `Er zijn ${items.length} item(s) in de categorie "${name}".\n\nKlik OK om de items ook te verwijderen, of Annuleren om alleen de categorie te verwijderen.`
    );
    removeCategory(name, deleteItems);
  } else {
    if (!confirm(`Weet je zeker dat je de categorie "${name}" wil verwijderen?`)) return;
    removeCategory(name, false);
  }

  renderAll();
  renderCategoriesSettings();
}

// ── INITIALISATIE ──
document.addEventListener('DOMContentLoaded', () => {
  initModalBackdrops();
  initImgUpload();

  // Topbar knoppen
  $('openAddBtn').addEventListener('click', openItemModalAdd);
  $('openSettingsBtn').addEventListener('click', openSettingsModal);
  $('openPackingBtn').addEventListener('click', () => { renderPackModal(); openModal('packModal'); });
  $('openPackingBtn2').addEventListener('click', () => { renderPackModal(); openModal('packModal'); });

  // Sorteer dropdown toggle
  $('sortBtn').addEventListener('click', e => {
    e.stopPropagation();
    $('sortDropdown').classList.toggle('open');
  });
  document.addEventListener('click', () => $('sortDropdown').classList.remove('open'));

  // Item modal
  $('itemModalClose').addEventListener('click',  () => closeModal('itemModal'));
  $('itemModalCancel').addEventListener('click', () => closeModal('itemModal'));
  $('itemModalSave').addEventListener('click',   saveItemModal);
  $('fName').addEventListener('keydown', e => { if (e.key === 'Enter') saveItemModal(); });

  // Verwijder modal
  $('deleteModalClose').addEventListener('click',  () => closeModal('deleteModal'));
  $('deleteCancelBtn').addEventListener('click',   () => closeModal('deleteModal'));
  $('deleteConfirmBtn').addEventListener('click',  confirmDeleteItem);

  // Pack modal
  $('packModalClose').addEventListener('click',  () => closeModal('packModal'));
  $('packModalClose2').addEventListener('click', () => closeModal('packModal'));
  $('clearPackBtn').addEventListener('click',  () => { clearPackList(); renderAll(); renderPackModal(); });
  $('clearPackBannerBtn').addEventListener('click', () => { clearPackList(); renderAll(); });
  $('moveAllBtn').addEventListener('click', onMoveAll);
  $('toastClose').addEventListener('click', hideToast);

  // Instelling: inpaklijst leegmaken na verplaatsen
  $('clearPackAfterMove').addEventListener('change', e => {
    const s = loadSettings();
    s.clearPackAfterMove = e.target.checked;
    saveSettings(s);
  });

  // Geschiedenis modal
  $('historyModalClose').addEventListener('click', () => closeModal('historyModal'));
  $('historyModalClose2').addEventListener('click', () => closeModal('historyModal'));

  // Instellingen modal
  $('settingsModalClose').addEventListener('click', () => closeModal('settingsModal'));
  $('settingsClose').addEventListener('click',      () => closeModal('settingsModal'));

  // Locatie toevoegen
  $('addLocationBtn').addEventListener('click', () => {
    const name = $('newLocationName').value.trim();
    if (!name) { $('newLocationName').focus(); return; }
    addLocation(name);
    $('newLocationName').value = '';
    renderAll();
    renderLocationsSettings();
  });
  $('newLocationName').addEventListener('keydown', e => {
    if (e.key === 'Enter') $('addLocationBtn').click();
  });

  // Categorie toevoegen
  $('addCategoryBtn').addEventListener('click', () => {
    const name = $('newCategoryName').value.trim();
    if (!name) { $('newCategoryName').focus(); return; }
    const added = addCategory(name);
    if (!added) {
      $('newCategoryName').select();
      return;
    }
    $('newCategoryName').value = '';
    renderAll();
    renderCategoriesSettings();
  });
  $('newCategoryName').addEventListener('keydown', e => {
    if (e.key === 'Enter') $('addCategoryBtn').click();
  });

  // Im-/export
  $('exportJsonBtn').addEventListener('click', exportJSON);
  $('exportCsvBtn').addEventListener('click',  exportCSV);
  $('importJsonBtn').addEventListener('click', () => $('importJsonFile').click());
  $('importJsonFile').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    importJSON(
      file,
      () => { alert('Import succesvol!'); renderAll(); closeModal('settingsModal'); },
      msg => alert('Import mislukt: ' + msg)
    );
    e.target.value = ''; // Reset zodat hetzelfde bestand opnieuw geïmporteerd kan worden
  });

  // Zoeken en filteren
  $('searchInput').addEventListener('input',  renderAll);
  $('filterLoc').addEventListener('change',   renderAll);
  $('filterCat').addEventListener('change',   renderAll);

  // Eerste render
  renderAll();
});