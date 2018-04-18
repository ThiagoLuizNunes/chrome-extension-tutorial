document.addEventListener('DOMContentLoaded', domCallback);

function domCallback() {
  const checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', tabCallback, false);
}

function tabCallback(tab) {
  alert('HALO');
  const doc = document;
  const form = doc.createElement('form');
  const input = doc.createElement('input');

  form.action = 'http://gtmetrix.com/analyze.html?bm';
  form.method = 'post';

  input.type = 'hidden';
  input.name = 'url';
  input.value = tab.url;

  form.appendChild(input);
  doc.body.appendChild(form);
  form.submit();
}
