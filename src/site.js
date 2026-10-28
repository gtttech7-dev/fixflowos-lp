(() => {
  'use strict';
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.getElementById('mobile-navigation');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const opening = menu.hidden;
      menu.hidden = !opening;
      toggle.setAttribute('aria-expanded', String(opening));
      toggle.setAttribute('aria-label', opening ? 'Fechar menu' : 'Abrir menu');
    });
    menu.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        menu.hidden = true;
        toggle.setAttribute('aria-expanded','false');
        toggle.setAttribute('aria-label','Abrir menu');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !menu.hidden) {
        menu.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }
  if ('IntersectionObserver' in window) {
    const targets = document.querySelectorAll('.feature-card, .step-card, .price-card, .highlight-card, .split-media');
    const observer = new IntersectionObserver((entries)=>{
      for(const e of entries) if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target);}
    },{threshold:0.08,rootMargin:'0px 0px 35px 0px'});
    targets.forEach(x=>observer.observe(x));
  }
})();
