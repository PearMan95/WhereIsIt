// ── UI.JS ──
// Render-functies, modals openen/sluiten, filters en sortering.

const $ = id => document.getElementById(id);

// ── ICONS ──
const ICONS = {
  search:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  plus:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  close:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  edit:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  trash:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>`,
  package:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  mappin:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  inbox:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>`,
  shirt:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/></svg>`,
  monitor:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  activity: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  book:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
  user:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  box:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
  image:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  upload:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
  history:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.5"/></svg>`,
  sort:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="15" y2="12"/><line x1="3" y1="18" x2="9" y2="18"/></svg>`,
  chevron:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
};

const CAT_ICONS = {
  Kleding: 'shirt', Elektronica: 'monitor', Sport: 'activity',
  School: 'book', Persoonlijk: 'user', Overig: 'box',
};

function ic(name, size) {
  const svg = ICONS[name] || ICONS.box;
  return `<span class="ic${size ? ' ic-' + size : ''}">${svg}</span>`;
}

function getCatIcon(cat) {
  return CAT_ICONS[cat] || 'box';
}

// ── MODALS ──
function openModal(id)  { $(id).classList.add('open'); }
function closeModal(id) { $(id).classList.remove('open'); }

function initModalBackdrops() {
  document.querySelectorAll('.modal-backdrop').forEach(el =>
    el.addEventListener('click', e => { if (e.target === el) closeModal(el.id); })
  );
}

// ── FILTERS & SORTERING ──
function getFilterState() {
  return {
    q:      $('searchInput').value.toLowerCase(),
    loc:    $('filterLoc').value,
    cat:    $('filterCat').value,
  };
}

function getSortState() {
  const s = loadSettings();
  return { field: s.sortField, dir: s.sortDir };
}

function setSortState(field) {
  const s = loadSettings();
  if (s.sortField === field) {
    s.sortDir = s.sortDir === 'asc' ? 'desc' : 'asc';
  } else {
    s.sortField = field;
    s.sortDir   = 'asc';
  }
  saveSettings(s);
  renderAll();
}

function applyFiltersAndSort(items) {
  const { q, loc, cat } = getFilterState();
  const { field, dir }  = getSortState();

  let result = items.filter(item =>
    (!q   || item.name.toLowerCase().includes(q) || (item.note || '').toLowerCase().includes(q)) &&
    (!loc || item.locationId === loc) &&
    (!cat || item.category   === cat)
  );

  result.sort((a, b) => {
    let av, bv;
    if (field === 'name') {
      av = a.name.toLowerCase();
      bv = b.name.toLowerCase();
    } else if (field === 'location') {
      av = getLocationName(a.locationId).toLowerCase();
      bv = getLocationName(b.locationId).toLowerCase();
    } else if (field === 'category') {
      av = a.category.toLowerCase();
      bv = b.category.toLowerCase();
    } else if (field === 'updatedAt') {
      av = a.updatedAt || a.createdAt;
      bv = b.updatedAt || b.createdAt;
    } else {
      av = a.createdAt;
      bv = b.createdAt;
    }
    if (av < bv) return dir === 'asc' ? -1 :  1;
    if (av > bv) return dir === 'asc' ?  1 : -1;
    return 0;
  });

  return result;
}

// ── TOOLBAR DROPDOWNS ──
function renderFilterDropdowns() {
  const locations = getLocations();
  const curLoc    = $('filterLoc').value;
  $('filterLoc').innerHTML =
    '<option value="">Alle locaties</option>' +
    locations.map(l => `<option value="${l.id}"${l.id === curLoc ? ' selected' : ''}>${l.name}</option>`).join('');

  const cats   = getCategories();
  const curCat = $('filterCat').value;
  $('filterCat').innerHTML =
    '<option value="">Alle categorieën</option>' +
    cats.map(c => `<option value="${c}"${c === curCat ? ' selected' : ''}>${c}</option>`).join('');

  // Sorteerknop label + richting
  const { field, dir } = getSortState();
  const labels = { name: 'Naam', location: 'Locatie', category: 'Categorie', updatedAt: 'Bijgewerkt', createdAt: 'Toegevoegd' };
  $('sortLabel').textContent = labels[field] || 'Naam';
  $('sortDir').innerHTML = dir === 'asc'
    ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;display:block"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;display:block"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`;
}

// ── ITEM GRID ──
function renderGrid() {
  const all      = getItems();
  const filtered = applyFiltersAndSort(all);
  const pack     = getPackList();
  const grid     = $('itemGrid');

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="empty">
        <div class="empty-icon">${ic('inbox', 'xl')}</div>
        <h3>${all.length ? 'Geen items gevonden' : 'Nog geen items'}</h3>
        <p>${all.length ? 'Pas je zoekopdracht of filters aan.' : 'Voeg je eerste item toe via de knop rechtsboven.'}</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const inPack      = pack.includes(item.id);
    const locColor    = getLocationColor(item.locationId);
    const locLight    = getLocationLightColor(item.locationId);
    const locName     = getLocationName(item.locationId);
    const catIconName = getCatIcon(item.category);
    const imgHTML     = item.img
      ? `<div class="card-img"><img src="${item.img}" alt="${item.name}" /></div>`
      : `<div class="card-img">${ic(catIconName, 'lg')}</div>`;

    return `
      <div class="card">
        ${imgHTML}
        <div class="card-body">
          <div class="card-name">${item.name}</div>
          ${item.note ? `<div class="card-note">${item.note}</div>` : ''}
        </div>
        <div class="card-footer">
          <div style="display:flex;gap:.35rem;flex-wrap:wrap">
            <span class="tag" style="background:${locLight};color:${locColor}">${ic('mappin', 'sm')} ${locName}</span>
            <span class="tag tag-cat">${ic(catIconName, 'sm')} ${item.category}</span>
          </div>
          <div class="card-actions">
            <button class="icon-btn${inPack ? ' pack-active' : ''}" title="Inpaklijst" onclick="onTogglePack('${item.id}')">${ICONS.package}</button>
            <button class="icon-btn" title="Geschiedenis" onclick="onOpenHistory('${item.id}')">${ICONS.history}</button>
            <button class="icon-btn" title="Bewerken" onclick="onOpenEdit('${item.id}')">${ICONS.edit}</button>
            <button class="icon-btn" title="Verwijderen" onclick="onOpenDelete('${item.id}')">${ICONS.trash}</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ── PACK BANNER ──
function renderPackBanner() {
  const count = getPackList().length;
  $('packCount').textContent = count;
  $('packBanner').style.display = count ? 'flex' : 'none';
}

// ── PACK MODAL ──
function renderPackModal() {
  const list  = getPackList();
  const el    = $('packList');
  if (!list.length) {
    el.innerHTML = `<p style="color:var(--text-muted);font-size:.9rem;text-align:center;padding:1rem">Geen items op de inpaklijst.</p>`;
    return;
  }
  el.innerHTML = list.map(id => {
    const item = getItemById(id);
    if (!item) return '';
    const catIconName = getCatIcon(item.category);
    return `
      <div class="pack-item">
        <span class="pack-item-icon">${ICONS[catIconName] || ICONS.box}</span>
        <span class="pack-item-name">${item.name}</span>
        <span class="pack-item-loc">${getLocationName(item.locationId)}</span>
        <button class="icon-btn" title="Verwijderen uit lijst" onclick="onTogglePack('${item.id}')">${ICONS.close}</button>
      </div>`;
  }).join('');
}

// ── GESCHIEDENIS MODAL ──
function renderHistoryModal(itemId) {
  const item    = getItemById(itemId);
  if (!item) return;
  $('historyItemName').textContent = item.name;
  const entries = getItemHistory(item);
  const el      = $('historyList');
  if (!entries.length) {
    el.innerHTML = `<p style="color:var(--text-muted);font-size:.9rem;text-align:center;padding:1rem">Nog geen geschiedenis voor dit item.</p>`;
    return;
  }
  el.innerHTML = entries.map(e => `
    <div class="history-item">
      <span class="ic ic-sm">${ICONS.history}</span>
      <span>${e}</span>
    </div>`).join('');
}

// ── ITEM MODAL (toevoegen/bewerken) ──
let _imgData   = null;
let _editingId = null;

function openItemModalAdd() {
  _editingId = null;
  _imgData   = null;
  $('itemModalTitle').textContent = 'Item toevoegen';
  $('fName').value = '';
  $('fNote').value = '';
  $('fCat').value  = getCategories()[0] || '';

  const locs = getLocations();
  $('fLoc').innerHTML = locs.map(l => `<option value="${l.id}">${l.name}</option>`).join('');

  const cats = getCategories();
  $('fCat').innerHTML = cats.map(c => `<option value="${c}">${c}</option>`).join('');

  $('imgPreviewImg').style.display      = 'none';
  $('imgPlaceholderIcon').style.display = '';
  $('imgPlaceholderText').style.display = '';
  openModal('itemModal');
  setTimeout(() => $('fName').focus(), 50);
}

function openItemModalEdit(itemId) {
  const item = getItemById(itemId);
  if (!item) return;
  _editingId = itemId;
  _imgData   = item.img || null;

  $('itemModalTitle').textContent = 'Item bewerken';
  $('fName').value = item.name;
  $('fNote').value = item.note || '';

  const locs = getLocations();
  $('fLoc').innerHTML = locs.map(l => `<option value="${l.id}"${l.id === item.locationId ? ' selected' : ''}>${l.name}</option>`).join('');

  const cats = getCategories();
  $('fCat').innerHTML = cats.map(c => `<option value="${c}"${c === item.category ? ' selected' : ''}>${c}</option>`).join('');

  if (item.img) {
    $('imgPreviewImg').src            = item.img;
    $('imgPreviewImg').style.display  = 'block';
    $('imgPlaceholderIcon').style.display = 'none';
    $('imgPlaceholderText').style.display = 'none';
  } else {
    $('imgPreviewImg').style.display      = 'none';
    $('imgPlaceholderIcon').style.display = '';
    $('imgPlaceholderText').style.display = '';
  }
  openModal('itemModal');
}

function saveItemModal() {
  const name = $('fName').value.trim();
  if (!name) { $('fName').focus(); return; }

  const data = {
    name,
    locationId: $('fLoc').value,
    category:   $('fCat').value,
    note:       $('fNote').value,
    img:        _imgData,
  };

  if (_editingId) {
    updateItem(_editingId, data);
  } else {
    createItem(data);
  }

  closeModal('itemModal');
  renderAll();
}

function initImgUpload() {
  $('fImg').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      _imgData = ev.target.result;
      $('imgPreviewImg').src            = _imgData;
      $('imgPreviewImg').style.display  = 'block';
      $('imgPlaceholderIcon').style.display = 'none';
      $('imgPlaceholderText').style.display = 'none';
    };
    reader.readAsDataURL(file);
  });
}

// ── VERWIJDER MODAL ──
let _deletingId = null;

function openDeleteModal(itemId) {
  _deletingId = itemId;
  const item  = getItemById(itemId);
  $('deleteItemName').textContent = item?.name || 'dit item';
  openModal('deleteModal');
}

function confirmDeleteItem() {
  if (_deletingId) deleteItem(_deletingId);
  _deletingId = null;
  closeModal('deleteModal');
  renderAll();
}

// ── INSTELLINGEN MODAL ──
function openSettingsModal() {
  renderLocationsSettings();
  renderCategoriesSettings();
  openModal('settingsModal');
}

function renderLocationsSettings() {
  const locations = getLocations();
  $('locationsList').innerHTML = locations.map(l => `
    <div class="settings-row">
      <input class="form-input" value="${l.name}" id="loc-name-${l.id}" style="flex:1" />
      <input type="color" class="color-input" value="${l.color}" id="loc-color-${l.id}" title="Kleur kiezen" />
      <button class="btn btn-ghost btn-sm" onclick="onSaveLocation('${l.id}')">
        ${ic('edit', 'sm')} Opslaan
      </button>
      <button class="icon-btn" onclick="onDeleteLocation('${l.id}')" title="Locatie verwijderen">${ICONS.trash}</button>
    </div>`).join('');
}

function renderCategoriesSettings() {
  const cats = getCategories();
  $('categoriesList').innerHTML = cats.map(c => `
    <div class="settings-row">
      <span class="settings-row-label">${ic(getCatIcon(c), 'sm')} ${c}</span>
      <button class="icon-btn" onclick="onDeleteCategory('${c}')" title="Categorie verwijderen">${ICONS.trash}</button>
    </div>`).join('');
}

// ── SORT DROPDOWN ──
function renderSortDropdown() {
  const { field, dir } = getSortState();
  const dirLabel = dir === 'asc' ? 'Oplopend' : 'Aflopend';
  const dirIcon  = dir === 'asc'
    ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;display:block"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;display:block"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`;

  const dirBtn = `<button class="sort-option sort-dir-toggle" onclick="onToggleSortDir()">
    ${dirIcon} ${dirLabel}
  </button><div style="height:1px;background:var(--border);margin:.25rem 0"></div>`;

  $('sortMenu').innerHTML = dirBtn + [
    { value: 'name',      label: 'Naam' },
    { value: 'location',  label: 'Locatie' },
    { value: 'category',  label: 'Categorie' },
    { value: 'updatedAt', label: 'Bijgewerkt' },
    { value: 'createdAt', label: 'Toegevoegd' },
  ].map(o => `
    <button class="sort-option${field === o.value ? ' active' : ''}" onclick="onSetSort('${o.value}')">
      ${o.label}
    </button>`).join('');
}

// ── ALLES OPNIEUW RENDEREN ──
function renderAll() {
  renderFilterDropdowns();
  renderGrid();
  renderPackBanner();
  renderSortDropdown();
}