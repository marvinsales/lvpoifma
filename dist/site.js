const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
}

const hero = document.querySelector('.hero');

if (hero && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  hero.addEventListener('pointermove', (event) => {
    const bounds = hero.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    hero.style.setProperty('--pointer-x', `${(x * 14).toFixed(1)}px`);
    hero.style.setProperty('--pointer-y', `${(y * 10).toFixed(1)}px`);
    hero.style.setProperty('--pointer-rotate', `${(x * 2.4).toFixed(2)}deg`);
  });

  hero.addEventListener('pointerleave', () => {
    hero.style.setProperty('--pointer-x', '0px');
    hero.style.setProperty('--pointer-y', '0px');
    hero.style.setProperty('--pointer-rotate', '0deg');
  });
}


// Interação suave na abertura da página Sobre
document.querySelectorAll('.about-intro').forEach((intro) => {
  intro.addEventListener('pointermove', (event) => {
    const rect = intro.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 18;
    intro.style.setProperty('--about-x', `${x}px`);
    intro.style.setProperty('--about-y', `${y}px`);
  });
  intro.addEventListener('pointerleave', () => {
    intro.style.setProperty('--about-x', '0px');
    intro.style.setProperty('--about-y', '0px');
  });
});


// Movimento suave no painel de estatísticas da equipe
document.querySelectorAll('.team-stats').forEach((panel) => {
  panel.addEventListener('pointermove', (event) => {
    const rect = panel.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 16;
    panel.style.setProperty('--stats-x', `${x}px`);
    panel.style.setProperty('--stats-y', `${y}px`);
  });
  panel.addEventListener('pointerleave', () => {
    panel.style.setProperty('--stats-x', '0px');
    panel.style.setProperty('--stats-y', '0px');
  });
});
