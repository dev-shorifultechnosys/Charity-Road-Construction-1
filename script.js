const langToggle = document.getElementById('langToggle');
const html = document.documentElement;
let currentLang = 'ar';

function applyLanguage(lang){
  currentLang = lang;
  const isEnglish = lang === 'en';
  html.lang = isEnglish ? 'en' : 'ar';
  html.dir = isEnglish ? 'ltr' : 'rtl';
  document.body.classList.toggle('en', isEnglish);
  langToggle.textContent = isEnglish ? 'العربية' : 'English';
  document.querySelectorAll('[data-ar][data-en]').forEach(el=>{
    el.textContent = isEnglish ? el.dataset.en : el.dataset.ar;
  });
  document.querySelectorAll('[data-placeholder-ar][data-placeholder-en]').forEach(el=>{
    el.placeholder = isEnglish ? el.dataset.placeholderEn : el.dataset.placeholderAr;
  });
}
langToggle.addEventListener('click',()=>applyLanguage(currentLang === 'ar' ? 'en' : 'ar'));

const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
mobileToggle.addEventListener('click',()=>{
  const open = navLinks.classList.toggle('open');
  mobileToggle.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('show'); observer.unobserve(entry.target); }
  })
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

applyLanguage('ar');
