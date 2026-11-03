// ── IMPORTEXPORT.JS ──
// Exporteren naar JSON en CSV, importeren vanuit JSON.

// ── EXPORT JSON ──
function exportJSON() {
  const data = exportAll();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  downloadBlob(blob, `whereisit-export-${dateStamp()}.json`);
}

// ── EXPORT CSV ──
// Exporteert alleen de items (locaties en categorieën zijn tekstvelden).
function exportCSV() {
  const items     = getItems();
  const headers   = ['Naam', 'Locatie', 'Categorie', 'Notitie', 'Aangemaakt', 'Bijgewerkt'];
  const rows      = items.map(item => [
    csvEscape(item.name),
    csvEscape(getLocationName(item.locationId)),
    csvEscape(item.category),
    csvEscape(item.note || ''),
    csvEscape(formatDate(item.createdAt)),
    csvEscape(formatDate(item.updatedAt)),
  ]);

  const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' }); // BOM voor Excel
  downloadBlob(blob, `whereisit-items-${dateStamp()}.csv`);
}

// ── IMPORT JSON ──
function importJSON(file, onSuccess, onError) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      // Minimale validatie: kijk of items een array is
      if (!Array.isArray(data.items)) throw new Error('Ongeldig bestandsformaat.');
      importAll(data);
      onSuccess();
    } catch (err) {
      onError(err.message);
    }
  };
  reader.readAsText(file);
}

// ── HELPERS ──
function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a   = document.createElement('a');
  a.href     = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function dateStamp() {
  return new Date().toISOString().slice(0, 10);
}

function csvEscape(value) {
  const str = String(value ?? '');
  // Escape aanhalingstekens en wrap in quotes als nodig
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}
