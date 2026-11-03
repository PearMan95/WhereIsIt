// ── SVG ICON LIBRARY ──
// Centraal punt voor alle iconen. Pas hier aan om iconen site-breed te wijzigen.
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
};

// Koppelt categorienamen aan icoonnamen
const CAT_ICONS = {
  Kleding: 'shirt', Elektronica: 'monitor', Sport: 'activity',
  School: 'book', Persoonlijk: 'user', Overig: 'box',
};

// Helper: geeft een <span class="ic"> terug met het gevraagde icoon
function ic(name, size) {
  const svg = ICONS[name] || ICONS.box;
  return `<span class="ic${size ? ' ic-' + size : ''}">${svg}</span>`;
}

// ── STATE ──
const DEFAULT_SETTINGS = { locA: 'Papa', locB: 'Mama' };
let items    = JSON.parse(localStorage.getItem('wii_items')    || '[]');
let packList = JSON.parse(localStorage.getItem('wii_pack')     || '[]');
let settings = JSON.parse(localStorage.getItem('wii_settings') || JSON.stringify(DEFAULT_SETTINGS));
let editingId  = null;
let deletingId = null;
let imgData    = null;

const $ = id => document.getElementById(id);
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2);

function save() {
  localStorage.setItem('wii_items',    JSON.stringify(items));
  localStorage.setItem('wii_pack',     JSON.stringify(packList));
  localStorage.setItem('wii_settings', JSON.stringify(settings));
}

function locName(key) {
  return key === 'a' ? settings.locA : settings.locB;
}

// ── RENDER ──
function applySettings() {
  $('filterLoc').innerHTML =
    `<option value="">Alle locaties</option>
     <option value="a">${settings.locA}</option>
     <option value="b">${settings.locB}</option>`;
  $('fLoc').innerHTML =
    `<option value="a">${settings.locA}</option>
     <option value="b">${settings.locB}</option>`;
}

function buildCatFilter() {
  const used = [...new Set(items.map(i => i.cat))];
  const cur  = $('filterCat').value;
  $('filterCat').innerHTML =
    '<option value="">Alle categorieën</option>' +
    used.map(c => `<option value="${c}"${c === cur ? ' selected' : ''}>${c}</option>`).join('');
}

function render() {
  applySettings();
  buildCatFilter();

  const q   = $('searchInput').value.toLowerCase();
  const loc = $('filterLoc').value;
  const cat = $('filterCat').value;

  const filtered = items.filter(item =>
    (!q   || item.name.toLowerCase().includes(q) || (item.note || '').toLowerCase().includes(q)) &&
    (!loc || item.loc === loc) &&
    (!cat || item.cat === cat)
  );

  const grid = $('itemGrid');

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="empty">
        <div class="empty-icon">${ic('inbox', 'xl')}</div>
        <h3>${items.length ? 'Geen items gevonden' : 'Nog geen items'}</h3>
        <p>${items.length ? 'Pas je zoekopdracht of filters aan.' : 'Voeg je eerste item toe via de knop rechtsboven.'}</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const inPack      = packList.includes(item.id);
    const locCls      = item.loc === 'a' ? 'tag-loc-a' : 'tag-loc-b';
    const catIconName = CAT_ICONS[item.cat] || 'box';
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
            <span class="tag ${locCls}">${ic('mappin', 'sm')} ${locName(item.loc)}</span>
            <span class="tag tag-cat">${ic(catIconName, 'sm')} ${item.cat}</span>
          </div>
          <div class="card-actions">
            <button class="icon-btn${inPack ? ' pack-active' : ''}" title="Inpaklijst" onclick="togglePack('${item.id}')">${ICONS.package}</button>
            <button class="icon-btn" title="Bewerken" onclick="openEdit('${item.id}')">${ICONS.edit}</button>
            <button class="icon-btn" title="Verwijderen" onclick="openDelete('${item.id}')">${ICONS.trash}</button>
          </div>
        </div>
      </div>`;
  }).join('');

  $('packCount').textContent = packList.length;
  $('packBanner').style.display = packList.length ? 'flex' : 'none';
}

// ── MODALS ──
function openModal(id)  { $(id).classList.add('open'); }
function closeModal(id) { $(id).classList.remove('open'); }

document.querySelectorAll('.modal-backdrop').forEach(el =>
  el.addEventListener('click', e => { if (e.target === el) closeModal(el.id); })
);

// ── ITEM TOEVOEGEN / BEWERKEN ──
function openAdd() {
  editingId = null;
  imgData   = null;
  $('itemModalTitle').textContent = 'Item toevoegen';
  ['fName', 'fNote'].forEach(id => $(id).value = '');
  $('fLoc').value = 'a';
  $('fCat').value = 'Kleding';
  $('imgPreviewImg').style.display     = 'none';
  $('imgPlaceholderIcon').style.display = '';
  $('imgPlaceholderText').style.display = '';
  openModal('itemModal');
  setTimeout(() => $('fName').focus(), 50);
}

function openEdit(id) {
  const item = items.find(i => i.id === id);
  if (!item) return;
  editingId = id;
  imgData   = item.img || null;
  $('itemModalTitle').textContent = 'Item bewerken';
  $('fName').value = item.name;
  $('fNote').value = item.note || '';
  $('fLoc').value  = item.loc;
  $('fCat').value  = item.cat;
  if (item.img) {
    $('imgPreviewImg').src           = item.img;
    $('imgPreviewImg').style.display  = 'block';
    $('imgPlaceholderIcon').style.display = 'none';
    $('imgPlaceholderText').style.display = 'none';
  } else {
    $('imgPreviewImg').style.display       = 'none';
    $('imgPlaceholderIcon').style.display  = '';
    $('imgPlaceholderText').style.display  = '';
  }
  openModal('itemModal');
}

function saveItem() {
  const name = $('fName').value.trim();
  if (!name) { $('fName').focus(); return; }

  const item = {
    id:   editingId || uid(),
    name,
    loc:  $('fLoc').value,
    cat:  $('fCat').value,
    note: $('fNote').value.trim(),
    img:  imgData || null,
  };

  if (editingId) {
    items[items.findIndex(i => i.id === editingId)] = item;
  } else {
    items.unshift(item);
  }

  save();
  closeModal('itemModal');
  render();
}

$('fImg').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    imgData = ev.target.result;
    $('imgPreviewImg').src           = imgData;
    $('imgPreviewImg').style.display  = 'block';
    $('imgPlaceholderIcon').style.display = 'none';
    $('imgPlaceholderText').style.display = 'none';
  };
  reader.readAsDataURL(file);
});

// ── VERWIJDEREN ──
function openDelete(id) {
  deletingId = id;
  $('deleteItemName').textContent = items.find(i => i.id === id)?.name || 'dit item';
  openModal('deleteModal');
}

function confirmDelete() {
  items    = items.filter(i => i.id !== deletingId);
  packList = packList.filter(i => i !== deletingId);
  save();
  closeModal('deleteModal');
  render();
}

// ── INPAKLIJST ──
function togglePack(id) {
  packList = packList.includes(id)
    ? packList.filter(x => x !== id)
    : [...packList, id];
  save();
  render();
}

function renderPackModal() {
  const list = $('packList');
  if (!packList.length) {
    list.innerHTML = `<p style="color:var(--text-muted);font-size:.9rem;text-align:center;padding:1rem">Geen items op de inpaklijst.</p>`;
    return;
  }
  list.innerHTML = packList.map(id => {
    const item = items.find(i => i.id === id);
    if (!item) return '';
    const catIconName = CAT_ICONS[item.cat] || 'box';
    return `
      <div class="pack-item">
        <span class="pack-item-icon">${ICONS[catIconName] || ICONS.box}</span>
        <span class="pack-item-name">${item.name}</span>
        <span class="pack-item-loc">${locName(item.loc)}</span>
        <button class="icon-btn" title="Verwijderen uit lijst" onclick="togglePack('${item.id}');renderPackModal()">${ICONS.close}</button>
      </div>`;
  }).join('');
}

function clearPack() {
  packList = [];
  save();
  render();
  closeModal('packModal');
}

// ── INSTELLINGEN ──
function openSettings() {
  $('sLocA').value = settings.locA;
  $('sLocB').value = settings.locB;
  openModal('settingsModal');
}

function saveSettings() {
  settings.locA = $('sLocA').value.trim() || 'Papa';
  settings.locB = $('sLocB').value.trim() || 'Mama';
  save();
  closeModal('settingsModal');
  render();
}

// ── EVENT LISTENERS ──
$('openAddBtn').addEventListener('click', openAdd);
$('openSettingsBtn').addEventListener('click', openSettings);
['openPackingBtn', 'openPackingBtn2'].forEach(id =>
  $(id).addEventListener('click', () => { renderPackModal(); openModal('packModal'); })
);

$('itemModalClose').addEventListener('click',   () => closeModal('itemModal'));
$('itemModalCancel').addEventListener('click',  () => closeModal('itemModal'));
$('itemModalSave').addEventListener('click',    saveItem);
$('fName').addEventListener('keydown', e => { if (e.key === 'Enter') saveItem(); });

$('deleteModalClose').addEventListener('click', () => closeModal('deleteModal'));
$('deleteCancelBtn').addEventListener('click',  () => closeModal('deleteModal'));
$('deleteConfirmBtn').addEventListener('click', confirmDelete);

$('packModalClose').addEventListener('click',   () => closeModal('packModal'));
$('packModalClose2').addEventListener('click',  () => closeModal('packModal'));
['clearPackBtn', 'clearPackBtn2'].forEach(id => $(id).addEventListener('click', clearPack));

$('settingsModalClose').addEventListener('click', () => closeModal('settingsModal'));
$('settingsCancel').addEventListener('click',     () => closeModal('settingsModal'));
$('settingsSave').addEventListener('click',       saveSettings);

$('searchInput').addEventListener('input',  render);
$('filterLoc').addEventListener('change',   render);
$('filterCat').addEventListener('change',   render);

// ── INIT ──
render();
