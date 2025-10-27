// slideshow
setInterval(()=>{
  const active=document.querySelector('.slide.active');
  let next=active.nextElementSibling;
  if(!next || !next.classList.contains('slide')){
    next=document.querySelector('.slide');
  }
  active.classList.remove('active');
  next.classList.add('active');
},3500);

// lightbox
const dlg=document.getElementById('lightbox');
const lightImg=document.getElementById('lightImg');
document.addEventListener('click',e=>{
  const btn=e.target.closest('button[data-full]');
  if(!btn) return;
  lightImg.src=btn.dataset.full;
  dlg.showModal();
});
document.getElementById('closeBtn').onclick=()=>dlg.close();
