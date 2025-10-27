// Scroll reveal for gallery tiles
const tiles = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
}, {threshold: 0.15});
tiles.forEach(t=> io.observe(t));

// Simple hero crossfade slideshow
(function(){
  const slides = document.querySelectorAll('.cover .slide');
  if(slides.length < 2) return;
  let i = 0;
  setInterval(()=>{
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 3500);
})();

// Lightweight lightbox
const dlg = document.getElementById('lightbox');
const lightImg = document.getElementById('lightImg');
const closeBtn = document.getElementById('closeBtn');
document.addEventListener('click', (e)=>{
  const btn = e.target.closest('button[data-full]');
  if(!btn) return;
  const src = btn.getAttribute('data-full');
  lightImg.src = src;
  dlg.showModal();
});
closeBtn.addEventListener('click', ()=> dlg.close());
dlg.addEventListener('click', (e)=>{ if(e.target === dlg) dlg.close(); });
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && dlg.open) dlg.close(); });
