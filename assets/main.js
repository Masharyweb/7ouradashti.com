// Mobile menu
const burger=document.getElementById('burger'),menu=document.getElementById('menu');
if(burger)burger.onclick=()=>menu.classList.toggle('open');

// Reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Back to top
const tt=document.getElementById('toTop');
addEventListener('scroll',()=>tt&&tt.classList.toggle('on',scrollY>600),{passive:true});
if(tt)tt.onclick=()=>scrollTo({top:0,behavior:'smooth'});

// Counters
document.querySelectorAll('[data-count]').forEach(el=>{
  const o=new IntersectionObserver(es=>{if(!es[0].isIntersecting)return;o.disconnect();
    const end=+el.dataset.count,pre=el.dataset.pre||'';let n=0;const st=Math.max(1,Math.ceil(end/40));
    const t=setInterval(()=>{n=Math.min(end,n+st);el.textContent=pre+n;if(n>=end)clearInterval(t)},30)});
  o.observe(el)});

// Generic modal
const modal=document.getElementById('modal');
function openModal(html){if(!modal)return;modal.querySelector('.content').innerHTML=html;modal.classList.add('open');document.body.style.overflow='hidden'}
function closeModal(){modal.classList.remove('open');document.body.style.overflow=''}
if(modal){modal.onclick=e=>{if(e.target===modal||e.target.closest('.close')||e.target.closest('[data-close]'))closeModal()};
  addEventListener('keydown',e=>e.key==='Escape'&&closeModal())}

// Article filters + reader
document.querySelectorAll('.chip').forEach(c=>c.onclick=()=>{
  document.querySelectorAll('.chip').forEach(x=>x.classList.remove('on'));c.classList.add('on');
  const f=c.dataset.f;document.querySelectorAll('[data-cat]').forEach(a=>a.classList.toggle('hide',f!=='all'&&a.dataset.cat!==f))});
document.querySelectorAll('[data-read]').forEach(b=>b.onclick=()=>{
  const a=b.closest('[data-cat],.featured');const t=a.querySelector('template');
  openModal(`<span class="tag">${a.querySelector('.tag').textContent}</span><h3>${a.querySelector('h2,h3').textContent}</h3><p style="color:var(--gold-d);font-weight:700">نبذة عن المقال</p>${t.innerHTML}<p style="color:var(--muted);margin-top:18px;font-size:.92rem">المقال كاملاً منشور في جريدة النهار الكويتية.</p>`)});

// Contact form -> WhatsApp
const f=document.getElementById('cform');
if(f){const p=new URLSearchParams(location.search).get('type');if(p){const s=f.querySelector('#ftype');[...s.options].forEach(o=>{if(o.text===p)o.selected=true})}
f.onsubmit=e=>{e.preventDefault();const v=id=>f.querySelector('#'+id).value;
  const t=`السلام عليكم، أنا ${v('fname')}\nنوع الطلب: ${v('ftype')}\nالهاتف: ${v('fphone')||'-'}\n\n${v('fmsg')}`;
  window.open('https://wa.me/96594477005?text='+encodeURIComponent(t),'_blank')}}
