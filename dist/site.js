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

const journalList = document.querySelector('#journal-list');
if (journalList) {
  const publications = [
    { year: 2026, type: 'Artigo científico', cover: 'WM', journal: 'Wave Motion', volume: 'v. 141', pages: '103674', title: 'Generation of multiple bending wave and vibration attenuation zones by constant-mass spatial distribution of 3D resonators in elastic metamaterial thin plates', authors: 'Sales, M. B. M.; Santos, M. C. P.; Gomes, C. B. F.; Chagas, I. F.; Pereira, F. N.; Miranda Jr., E. J. P.', doi: '10.1016/j.wavemoti.2025.103674', link: 'https://doi.org/10.1016/j.wavemoti.2025.103674', citations: [{ label: 'Scopus', value: 1, link: 'https://www.scopus.com/' }] },
    { year: 2026, type: 'Artigo científico', cover: 'IJMS', journal: 'International Journal of Mechanical Sciences', volume: 'v. 244', pages: '113747', title: 'Bandgap optimization in locally resonant metamaterial plates: A comparative study of five lattice geometries for low-frequency wave attenuation', authors: 'Ferreira, A. H. R.; Miranda Jr., E. J. P.; Goto, A. M.; Dos Santos, J. M. C.', link: 'https://papers.ssrn.com/', citations: [{ label: 'Scopus', value: 2, link: 'https://www.scopus.com/' }] },
    { year: 2026, type: 'Artigo científico', cover: 'JBSMSE', journal: 'Journal of the Brazilian Society of Mechanical Sciences and Engineering', volume: 'v. 48', pages: '309', title: 'Wave and vibration attenuation via full band gaps in 3D periodic sandwich metapanels', authors: 'Sales, M. B. M.; Araujo, B. C. C.; Santos, M. C. P.; Pereira, F. N.; Miranda Jr., E. J. P.', link: 'https://link.springer.com/', citations: [] },
    { year: 2025, type: 'Artigo científico', cover: 'REREM', journal: 'Revista de Estruturas e Materiais', volume: 'v. 18', pages: 'e18112', title: 'Microstructural, mechanical, and acoustic analyses of concrete with EPS and silica fume', authors: 'Silva, V. G. S.; Sandes Filho, C. G.; Angelin, A. F. P.; Paiva, R. E. M.; Palma, S. S. A.; Gonçalves, R.; Lintz, R. C. C.; Gachet, L. A.; Miranda Jr., E. J. P.', link: 'https://www.scielo.br/', citations: [] },
    { year: 2025, type: 'Artigo científico', cover: 'ZAMM', journal: 'Zeitschrift für Angewandte Mathematik und Mechanik', volume: 'v. 105', pages: 'e202400532', title: 'Formulation of the extended plane wave expansion for in-plane and out-of-plane vibrations in viscoelastic phononic thin plates under a constant temperature field', authors: 'Santos, M. C. P.; Sandes Filho, C. G.; Miranda Jr., E. J. P.; Sinatora, A.', doi: '10.1002/zamm.202400532', link: 'https://doi.org/10.1002/zamm.202400532', citations: [{ label: 'Web of Science', value: 5, link: 'https://www.webofscience.com/' }, { label: 'Scopus', value: 9, link: 'https://www.scopus.com/' }] },
    { year: 2025, type: 'Artigo científico', cover: 'IJMSE', journal: 'International Journal of Mechanical Sciences', volume: 'v. 293', pages: '110125', title: 'Wave and vibration attenuation in graded elastic metamaterial beams with local resonators', authors: 'Gomes, C. B. F.; Dos Santos, M. C. P.; Araujo, B. C. C.; Pereira, F. N.; Nobrega, E. D.; Dos Santos, J. M. C.; Miranda Jr., E. J. P.; Sinatora, A.', link: 'https://www.sciencedirect.com/journal/international-journal-of-mechanical-sciences', citations: [{ label: 'Web of Science', value: 2, link: 'https://www.webofscience.com/' }, { label: 'Scopus', value: 22, link: 'https://www.scopus.com/' }] }
  ];
  const search = document.querySelector('#publication-search');
  const sort = document.querySelector('#publication-sort');
  const note = document.querySelector('#results-note');
  const count = document.querySelector('#publication-count');
  let selectedYear = 'all';
  const normalize = value => value.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const render = () => {
    const term = normalize(search.value.trim());
    let filtered = publications.filter(item => (selectedYear === 'all' || String(item.year) === selectedYear) && (!term || normalize(`${item.title} ${item.authors} ${item.journal}`).includes(term)));
    filtered.sort((a, b) => sort.value === 'title' ? a.title.localeCompare(b.title) : sort.value === 'oldest' ? a.year - b.year : b.year - a.year);
    count.textContent = filtered.length;
    note.textContent = `Exibindo ${filtered.length} ${filtered.length === 1 ? 'publicação' : 'publicações'}`;
    journalList.innerHTML = filtered.length ? filtered.map(item => `<article class="publication publication-card"><div class="journal-cover cover-${item.cover.toLowerCase()}"><span>${item.cover}</span><small>${item.journal}</small><b>${item.year}</b></div><div class="publication-body"><div class="publication-topline"><p class="meta">${item.type} · ${item.year}</p><span class="publication-index">${String(item.year).slice(-2)}</span></div><h3>${item.title}</h3><p class="authors">${item.authors}</p><p class="journal"><em>${item.journal}</em> · ${item.volume} · ${item.pages}</p><div class="publication-actions"><a href="${item.link}" target="_blank" rel="noopener">Ver publicação <span>↗</span></a>${item.doi ? `<a href="https://doi.org/${item.doi}" target="_blank" rel="noopener">DOI <span>↗</span></a>` : ''}${item.citations.map(c => `<a class="citation-badge" href="${c.link}" target="_blank" rel="noopener"><strong>${c.value}</strong> ${c.label}</a>`).join('')}</div></div></article>`).join('') : '<div class="empty-state"><strong>Nenhuma publicação encontrada.</strong><span>Tente outro termo ou remova o filtro de ano.</span></div>';
  };
  document.querySelectorAll('.filter-button').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.filter-button').forEach(item => item.classList.remove('is-active')); button.classList.add('is-active'); selectedYear = button.dataset.year; render(); }));
  search.addEventListener('input', render);
  sort.addEventListener('change', render);
  render();
}
