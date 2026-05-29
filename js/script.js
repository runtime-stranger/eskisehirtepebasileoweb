
document.addEventListener('DOMContentLoaded',function(){
const T=document.getElementById('themeToggle'),L=document.getElementById('langToggle'),M=document.getElementById('mobileToggle'),N=document.getElementById('navLinks'),H=document.documentElement;
T.addEventListener('click',function(){H.setAttribute('data-theme',H.getAttribute('data-theme')==='dark'?'light':'dark')});
L.addEventListener('click',function(){H.setAttribute('data-lang',H.getAttribute('data-lang')==='tr'?'en':'tr')});
M.addEventListener('click',function(){const o=N.classList.toggle('open');M.setAttribute('aria-expanded',o)});
document.querySelectorAll('.nav-links a').forEach(function(l){l.addEventListener('click',function(){N.classList.remove('open');M.setAttribute('aria-expanded','false')})});
var u=document.querySelectorAll('section[id],header.hero'),n=document.querySelectorAll('.nav-links a');let k=!1;
window.addEventListener('scroll',function(){k||(k=!0,requestAnimationFrame(function(){let c='';u.forEach(function(s){window.scrollY>=s.offsetTop-100&&(c=s.getAttribute('id')||'home')});n.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+c)});k=!1}))});
document.querySelectorAll('.fade-in').forEach(function(el){new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting&&e.target.classList.add('visible')})},{threshold:0.1}).observe(el)})
});

