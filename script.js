const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#mobile-menu');
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menu'); menu.hidden = true; }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') === 'true'; toggle.setAttribute('aria-expanded', String(!open)); toggle.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu'); menu.hidden = open; });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); toggle.focus(); } });
document.addEventListener('click', event => { if (!menu.contains(event.target) && !toggle.contains(event.target)) closeMenu(); });
const sections = [...document.querySelectorAll('section[id]')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) document.querySelectorAll('.desktop-nav a').forEach(a => a.classList.toggle('active', a.hash === '#' + entry.target.id)); }); }, {rootMargin: '-20% 0px -65% 0px'});
  sections.forEach(section => observer.observe(section));
}
