// Para cambiar precios, edita el número de price y guarda el archivo en GitHub.
const menu = [
 {cat:'Bebidas',name:'Café Orgánico de altura',price:40},
 {cat:'Bebidas',name:'Cappucino',price:25},
 {cat:'Bebidas',name:'Cappucino Moka',price:25},
 {cat:'Bebidas',name:'Jugo Boing',price:25},
 {cat:'Bebidas',name:'Coca-cola',price:20},
 {cat:'Bebidas',name:'Refresco lata',price:25},
 {cat:'Bebidas',name:'Cerveza Modelo',price:30},
 {cat:'Bebidas',name:'Cerveza latón',price:35},
 {cat:'Bebidas',name:'Cerveza Ultra',price:30},
 {cat:'Bebidas',name:'Limonada',price:30},
 {cat:'Bebidas',name:'Cerveza S/alcohol',price:30},
 {cat:'Bebidas',name:'Lechitas Sabores 180 ml',price:20},
 {cat:'Bebidas',name:'Agua mineral',price:20},
 {cat:'Cocteles y tragos',name:'Margarita',price:80},
 {cat:'Cocteles y tragos',name:'Mezcalita',price:80},
 {cat:'Cocteles y tragos',name:'Daiquirí',price:80},
 {cat:'Cocteles y tragos',name:'Spicy Margarita',price:80},
 {cat:'Cocteles y tragos',name:'Cuba Vórtice',price:80},
 {cat:'Cocteles y tragos',name:'Mojito Tradicional o con Mezcal',price:80},
 {cat:'Cocteles y tragos',name:'Michelada (Latón)',price:70},
 {cat:'Cocteles y tragos',name:'Michelada Cubana (Latón)',price:70},
 {cat:'Cocteles y tragos',name:'Mocktail (sin alcohol)',price:65},
 {cat:'Cocteles y tragos',name:'Vaso Escarchado',price:15},
 {cat:'Cocteles y tragos',name:'Piña Colada',price:80},
 {cat:'Cocteles y tragos',name:'Mezcal Copa',price:60},
 {cat:'Cocteles y tragos',name:'Tequila Don Julio',price:100},
 {cat:'Snacks',name:'Sabritas',price:20},
 {cat:'Snacks',name:'Palomitas',price:30},
 {cat:'Snacks',name:'Galletas',price:20},
 {cat:'Snacks',name:'Nachos',desc:'Totopos, frijol, queso, guacamole, chiles',price:70},
 {cat:'Snacks',name:'Papas a la Francesa',price:55},
 {cat:'Snacks',name:'Dedos de queso',price:60},
 {cat:'Snacks',name:'Nuggets',price:60},
 {cat:'Snacks',name:'Alitas (5 pz)',desc:'BBQ, Mango Abanero, Tamarindo, Búfalo',price:85}
];
const categories=['Todos','Bebidas','Cocteles y tragos','Snacks'];
const tabs=document.querySelector('#tabs'),list=document.querySelector('#menu-list');
const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function show(category='Todos'){
 tabs.replaceChildren();
 for(const c of categories){const b=document.createElement('button');b.type='button';b.className='tab'+(c===category?' active':'');b.textContent=c;b.setAttribute('aria-pressed',c===category);b.onclick=()=>show(c);tabs.appendChild(b)}
 const visible=category==='Todos'?categories.slice(1):[category];
 list.innerHTML=visible.map(c=>`<section><h3 class="category-title">${safe(c)}</h3>${menu.filter(x=>x.cat===c).map(x=>`<div class="menu-row"><div><div class="item-name">${safe(x.name)}</div>${x.desc?`<div class="item-desc">${safe(x.desc)}</div>`:''}</div><div class="price">$${x.price.toFixed(2)} MXN</div></div>`).join('')}</section>`).join('');
}
show();
