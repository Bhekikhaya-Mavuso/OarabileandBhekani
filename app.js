// Reveal on scroll
const tiles=document.querySelectorAll('.reveal');
const io=new IntersectionObserver((e)=>{
  e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}});
},{threshold:.15});
tiles.forEach(t=>io.observe(t));

// Slideshow
let i=0;
const slides=document.querySelectorAll('.slide');
setInterval(()=>{
  slides[i].classList.remove('active');
  i=(i+1)%slides.length;
  slides[i].classList.add('active');
},3000);

// Lightbox
const dlg=document.getElementById('lightbox');
const img=document.getElementById('lightImg');
document.addEventListener('click',(e)=>{
  const btn=e.target.closest('button[data-full]');
  if(!btn) return;
  img.src=btn.dataset.full;
  dlg.showModal();
});
document.getElementById('closeBtn').onclick=()=>dlg.close();
dlg.onclick=e=>{if(e.target===dlg)dlg.close()};


