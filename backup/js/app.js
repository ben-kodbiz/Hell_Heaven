
// Simple client-side loader for verses JSON and renderer
(async function(){
  const path = 'data/verses.json';
  let data = {};
  try {
    const resp = await fetch(path);
    data = await resp.json();
  } catch(e){
    console.error('Failed to load verses.json', e);
    return;
  }

  // determine page type
  const isHeaven = location.pathname.endsWith('heaven.html');
  const isHell = location.pathname.endsWith('hell.html');

  const key = isHeaven ? 'heaven' : 'hell';
  const items = data[key] || [];
  if(!document.getElementById('content')) return;

  let index = 0;
  function render(i){
    const container = document.getElementById('content');
    container.innerHTML = '';
    if(!items[i]) return;
    const it = items[i];
    const block = document.createElement('article');
    block.className = 'quote ' + (isHeaven ? 'heaven-quote' : 'hell-quote');

    const typeLine = document.createElement('p');
    typeLine.style.fontWeight = '600';
    typeLine.textContent = it.type + " — " + it.reference;
    block.appendChild(typeLine);

    const text = document.createElement('p');
    text.style.marginTop = '0.6rem';
    text.textContent = it.text;
    block.appendChild(text);

    if(it.extra) {
      const extra = document.createElement('p');
      extra.style.marginTop = '0.6rem';
      extra.style.fontStyle = 'italic';
      extra.textContent = it.extra;
      block.appendChild(extra);
    }

    container.appendChild(block);
  }

  function prev(){
    index = (index - 1 + items.length) % items.length;
    render(index);
  }
  function next(){
    index = (index + 1) % items.length;
    render(index);
  }
  function rnd(){
    index = Math.floor(Math.random() * items.length);
    render(index);
  }

  document.getElementById('prev')?.addEventListener('click', prev);
  document.getElementById('next')?.addEventListener('click', next);
  document.getElementById('random')?.addEventListener('click', rnd);

  // initial render
  if(items.length) render(index);
})();
