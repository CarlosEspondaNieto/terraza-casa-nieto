// Menú cargado desde data/menu.json, editable posteriormente con Decap CMS.
let menu = [];
let categories = ['Todos'];
const tabs=document.querySelector('#tabs'),list=document.querySelector('#menu-list');
const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
function show(category='Todos'){
 tabs.replaceChildren();
 for(const c of categories){const b=document.createElement('button');b.type='button';b.className='tab'+(c===category?' active':'');b.textContent=c;b.setAttribute('aria-pressed',c===category);b.onclick=()=>show(c);tabs.appendChild(b)}
 const visible=category==='Todos'?categories.slice(1):[category];
 list.innerHTML=visible.map(c=>`<section><h3 class="category-title">${safe(c)}</h3>${menu.filter(x=>x.cat===c).map(x=>`<div class="menu-row"><div><div class="item-name">${safe(x.name)}</div>${x.desc?`<div class="item-desc">${safe(x.desc)}</div>`:''}</div><div class="price">$${Number(x.price).toFixed(2)} MXN</div></div>`).join('')}</section>`).join('');
}
async function loadMenu(){
 try {
  const response=await fetch('/data/menu.json',{cache:'no-cache'});
  if(!response.ok) throw new Error('No se pudo cargar el menú');
  const data=await response.json();
  menu=(data.items||[]).filter(x=>x.visible!==false);
  categories=['Todos',...new Set(menu.map(x=>x.cat))];
  show();
 }catch(error){
  console.error(error);
  list.textContent='Por el momento no se puede mostrar la carta. Solicita el menú al personal.';
 }
}
loadMenu();
