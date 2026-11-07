(function () {
  const $ = (id) => document.getElementById(id);
  const nr = 'SN-' + Date.now().toString(36).toUpperCase().slice(-6);
  $('vNr').textContent = 'Gutschein-Nr. ' + nr;

  function update() {
    $('vTo').textContent = $('to').value.trim() || '…';
    $('vFrom').textContent = $('from').value.trim() || '…';
    $('vMsg').textContent = $('msg').value.trim() || 'Ein Duft-Erlebnis zum Innehalten.';
    const n = Number($('count').value);
    $('vCount').textContent = n > 1 ? ' (' + n + ' Personen)' : '';
  }
  ['to', 'from', 'msg', 'count'].forEach((id) => $(id).addEventListener('input', update));
  update();

  $('printBtn').addEventListener('click', () => window.print());

  $('mailBtn').addEventListener('click', () => {
    const body = [
      'Hallo Selah Natur,',
      'ich möchte einen Gutschein für den Naturparfüm-Workshop bestellen.',
      'Für: ' + $('vTo').textContent,
      'Von: ' + $('vFrom').textContent,
      'Personen: ' + $('count').value,
      'Text: ' + $('vMsg').textContent,
      'Nr.: ' + nr
    ].join('\n');
    // TODO: eigene E-Mail-Adresse eintragen
    location.href = 'mailto:DEINE-MAIL@example.com?subject=' +
      encodeURIComponent('Gutschein Naturparfüm-Workshop') + '&body=' + encodeURIComponent(body);
  });
})();
