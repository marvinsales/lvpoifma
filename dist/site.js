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

const publications = [
    { year: 2026, type: 'Artigo científico', cover: 'WM', coverImage: 'assets/wave-motion-cover.png', journal: 'Wave Motion', volume: 'v. 141', pages: '103674', title: 'Generation of multiple bending wave and vibration attenuation zones by constant-mass spatial distribution of 3D resonators in elastic metamaterial thin plates', authors: 'Sales, M. B. M.; Santos, M. C. P.; Gomes, C. B. F.; Chagas, I. F.; Pereira, F. N.; Miranda Jr., E. J. P.', doi: '10.1016/j.wavemoti.2025.103674', link: 'https://doi.org/10.1016/j.wavemoti.2025.103674', page: 'publicacoes-10-1016-wavemoti-2025-103674.html', plumx: 'https://plu.mx/w/a/1_myy7gZ35eprjvzte5bG2eP6bN5oux9seKOJXzLqig', citations: [{ label: 'Scopus', value: 1, link: 'https://www.scopus.com/' }] },
    { year: 2026, type: 'Artigo científico', cover: 'IJMS', coverImage: 'assets/mssp-cover.png', journal: 'Mechanical Systems and Signal Processing', volume: 'v. 244', pages: '113747', title: 'Bandgap optimization in locally resonant metamaterial plates: A comparative study of five lattice geometries for low-frequency wave attenuation', authors: 'Ferreira, A. H. R.; Miranda Jr., E. J. P.; Goto, A. M.; Dos Santos, J. M. C.', doi: '10.1016/j.ymssp.2025.113747', link: 'https://doi.org/10.1016/j.ymssp.2025.113747', page: 'publicacoes-ijmssp-10-1016-j-ymssp-2025-113747.html', citations: [{ label: 'Scopus', value: 2, link: 'https://www.scopus.com/' }] },
    { year: 2026, type: 'Artigo científico', cover: 'JBSMSE', coverImage: 'assets/jbsmse-cover.png', journal: 'Journal of the Brazilian Society of Mechanical Sciences and Engineering', volume: 'v. 48', pages: '309', title: 'Wave and vibration attenuation via full band gaps in 3D periodic sandwich metapanels', authors: 'Sales, M. B. M.; Araujo, B. C. C.; Santos, M. C. P.; Pereira, F. N.; Miranda Jr., E. J. P.', doi: '10.1007/s40430-025-06272-8', link: 'https://doi.org/10.1007/s40430-025-06272-8', page: 'publicacoes-jbsmse-10-1007-s40430-025-06272-8.html', citations: [] },
    { year: 2025, type: 'Artigo científico', cover: 'REREM', coverImage: 'assets/ibracon-cover.png', journal: 'Ibracon Structures and Materials Journal', volume: 'v. 18', pages: 'e18112', title: 'Microstructural, mechanical, and acoustic analyses of concrete with EPS and silica fume', authors: 'Silva, V. G. S.; Sandes Filho, C. G.; Angelin, A. F. P.; Paiva, R. E. M.; Palma, S. S. A.; Gonçalves, R.; Lintz, R. C. C.; Gachet, L. A.; Miranda Jr., E. J. P.', doi: '10.1590/S1983-41952025000800012', link: 'https://doi.org/10.1590/S1983-41952025000800012', page: 'publicacoes-rerem-10-1590-s1983-41952025000800012.html', citations: [] },
    { year: 2025, type: 'Artigo científico', cover: 'ZAMM', coverImage: 'assets/zamm-cover.png', journal: 'Zeitschrift für Angewandte Mathematik und Mechanik', volume: 'v. 105', pages: 'e202400532', title: 'Formulation of the extended plane wave expansion for in-plane and out-of-plane vibrations in viscoelastic phononic thin plates under a constant temperature field', authors: 'Santos, M. C. P.; Sandes Filho, C. G.; Miranda Jr., E. J. P.; Sinatora, A.', doi: '10.1002/zamm.202400532', link: 'https://doi.org/10.1002/zamm.202400532', page: 'publicacoes-10-1002-zamm-202400532.html', plumx: 'https://plu.mx/plum/a/?doi=10.1002/zamm.202400532', citations: [{ label: 'Web of Science', value: 5, link: 'https://www.webofscience.com/' }, { label: 'Scopus', value: 9, link: 'https://www.scopus.com/' }] },
    { year: 2025, type: 'Artigo científico', cover: 'IJMSE', coverImage: 'assets/ijms-cover.png', journal: 'International Journal of Mechanical Sciences', volume: 'v. 293', pages: '110125', title: 'Wave and vibration attenuation in graded elastic metamaterial beams with local resonators', authors: 'Gomes, C. B. F.; Dos Santos, M. C. P.; Araujo, B. C. C.; Pereira, F. N.; Nobrega, E. D.; Dos Santos, J. M. C.; Miranda Jr., E. J. P.; Sinatora, A.', doi: '10.1016/j.ijmecsci.2025.110125', link: 'https://doi.org/10.1016/j.ijmecsci.2025.110125', page: 'publicacoes-ijmecs-10-1016-j-ijmecsci-2025-110125.html', citations: [{ label: 'Web of Science', value: 2, link: 'https://www.webofscience.com/' }, { label: 'Scopus', value: 22, link: 'https://www.scopus.com/' }] }
  ];

const journalList = document.querySelector('#journal-list');
if (journalList) {
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
    journalList.innerHTML = filtered.length ? filtered.map(item => `<article class="publication publication-card">${item.coverImage ? `<div class="journal-cover journal-cover-image"><img src="${item.coverImage}" alt="Capa da revista ${item.journal}"></div>` : `<div class="journal-cover cover-${item.cover.toLowerCase()}"><span>${item.cover}</span><small>${item.journal}</small><b>${item.year}</b></div>`}<div class="publication-body"><div class="publication-topline"><p class="meta">${item.type} · ${item.year}</p></div><h3><a class="publication-title-link" href="/publicacoes/${item.doi ? item.doi : item.page}/">${item.title}</a></h3><p class="authors">${item.authors}</p><p class="journal"><em>${item.journal}</em> · ${item.volume} · ${item.pages}</p><div class="publication-actions"><a href="/publicacoes/${item.doi ? item.doi : item.page}/">Detalhes <span>↗</span></a><a href="${item.link}" target="_blank" rel="noopener">Ver publicação <span>↗</span></a>${item.doi ? `<a href="https://doi.org/${item.doi}" target="_blank" rel="noopener">DOI <span>↗</span></a>` : ''}${item.citations.length ? `<span class="citation-label">Citações:</span>${item.citations.map(c => `<a class="citation-badge" href="${c.link}" target="_blank" rel="noopener"><strong>${c.value}</strong> ${c.label}</a>`).join('')} ` : '<span class="citation-label">Citações: —</span>'}<a class="citation-plumx-link plumx-plum-print-popup" href="https://plu.mx/plum/a/?doi=${encodeURIComponent(item.doi)}" data-popup="right" data-size="medium" data-site="plum" data-hide-when-empty="true" aria-label="Métricas PlumX deste artigo">PlumX</a></div></div></article>`).join('') : '<div class="empty-state"><strong>Nenhuma publicação encontrada.</strong><span>Tente outro termo ou remova o filtro de ano.</span></div>';
  };
  document.querySelectorAll('.filter-button').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.filter-button').forEach(item => item.classList.remove('is-active')); button.classList.add('is-active'); selectedYear = button.dataset.year; render(); }));
  search.addEventListener('input', render);
  sort.addEventListener('change', render);
  render();
}



const homeTeamContent = document.querySelector('#home-team-content');
if (homeTeamContent) {
  const escapeHtml = value => String(value || '').replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[character]));

  fetch('equipe.html')
    .then(response => {
      if (!response.ok) throw new Error('Não foi possível carregar a equipe.');
      return response.text();
    })
    .then(html => {
      const documentPage = new DOMParser().parseFromString(html, 'text/html');
      const teamSections = [...documentPage.querySelectorAll('.team-section')];
      const sectionByEyebrow = label => teamSections.find(section => section.querySelector('.eyebrow')?.textContent.trim() === label);
      const coordinatorSection = sectionByEyebrow('Coordenação');
      const collaborationSection = sectionByEyebrow('Colaboração');
      const researchSection = sectionByEyebrow('Pesquisa');
      const formationSection = sectionByEyebrow('Formação');
      const coordinator = coordinatorSection?.querySelector('.team-card');
      const collaborators = collaborationSection ? [...collaborationSection.querySelectorAll('.team-card')] : [];

      if (!coordinator || !collaborators.length) throw new Error('Dados da equipe incompletos.');

      const coordinatorName = coordinator.querySelector('.member-heading h3')?.textContent.trim();
      const coordinatorDegree = coordinator.querySelector('.member-heading p')?.textContent.trim();
      const coordinatorImage = coordinator.querySelector('.member-avatar img')?.getAttribute('src') || 'assets/lvpo-symbol-original.png';
      const coordinatorDescription = coordinator.querySelector('.member-details > p')?.textContent.trim() || '';
      const coordinatorLinks = [...coordinator.querySelectorAll('.member-links > a')].map(link => {
        const label = link.querySelector('span:last-child')?.textContent.trim() || link.textContent.trim();
        const logoByLabel = {
          'Lattes': 'assets/logo-lattes.png',
          'Scopus': 'assets/logo-scopus.png',
          'Web of Science': 'assets/logo-webofscience.png'
        };
        return {
          href: link.getAttribute('href'),
          label,
          logo: logoByLabel[label] || null,
          isOrcid: label === 'ORCID'
        };
      });
      const counts = {
        coordinator: coordinator ? 1 : 0,
        collaborators: collaborationSection ? collaborationSection.querySelectorAll('.team-card').length : 0,
        researchers: researchSection ? researchSection.querySelectorAll('.team-card').length : 0,
        students: formationSection ? formationSection.querySelectorAll('.team-card').length : 0
      };

      homeTeamContent.innerHTML = `
        <article class="home-team-coordinator">
            <div class="home-team-card-label">
            <p class="eyebrow">Coordenação do grupo</p>
            <span>Responsável pelo grupo</span>
          </div>
          <div class="home-team-coordinator-main">
            <div class="home-team-avatar"><img src="${escapeHtml(coordinatorImage)}" alt="Foto de ${escapeHtml(coordinatorName)}"></div>
            <div>
              <h3>${escapeHtml(coordinatorName)}</h3>
              <p>${escapeHtml(coordinatorDegree)}</p>
            </div>
          </div>
          <p class="home-team-coordinator-description">${escapeHtml(coordinatorDescription)}</p>
          <div class="home-team-platform-links">
            ${coordinatorLinks.map(link => `<a href="${escapeHtml(link.href)}" target="_blank" rel="noopener noreferrer">${link.logo ? `<img class="home-team-platform-logo ${link.label === 'Scopus' ? 'home-team-logo-scopus' : ''}" src="${escapeHtml(link.logo)}" alt="">` : `<span class="home-team-orcid-mark">iD</span>`}<span>${escapeHtml(link.label)}</span></a>`).join('')}
          </div>
        </article>
        <div class="home-team-stats-wrap">
          <aside class="home-team-stats">
          <div class="home-team-stats-heading">
            <div>
              <p class="eyebrow">Nosso quadro</p>
              <h3>Composição do grupo</h3>
            </div>
            <span>Atualizado pela equipe</span>
          </div>
          <div class="home-team-stats-grid">
            ${[
              ['coordinator', 'coordenador'],
              ['collaborators', 'professores colaboradores'],
              ['researchers', 'pesquisadores'],
              ['students', 'estudantes']
            ].map(([key, label]) => `<a class="home-team-stat" href="equipe.html"><strong>${counts[key]}</strong><span>${label}</span></a>`).join('')}
          </div>
          </aside>
          <a class="button button-primary home-team-complete-button" href="equipe.html">Conheça o grupo completo</a>
        </div>
      `;
    })
    .catch(() => {
      homeTeamContent.innerHTML = '<p class="home-team-loading">Consulte a página <a href="equipe.html">Equipe</a> para conhecer todos os integrantes do LVPO.</p>';
    });
}

const recentPublications = document.querySelector('#recent-publications');
if (recentPublications) {
  const recent = [...publications]
    .sort((a, b) => b.year - a.year)
    .slice(0, 2);

  recentPublications.innerHTML = recent.map(item => `
    <article class="publication publication-card">
      ${item.coverImage ? `<div class="journal-cover journal-cover-image"><img src="${item.coverImage}" alt="Capa da revista ${item.journal}"></div>` : `<div class="journal-cover cover-${item.cover.toLowerCase()}"><span>${item.cover}</span><small>${item.journal}</small><b>${item.year}</b></div>`}
      <div class="publication-body">
        <div class="publication-topline"><p class="meta">${item.type} · ${item.year}</p></div>
        <h3><a class="publication-title-link" href="/publicacoes/${item.doi ? item.doi : item.page}/">${item.title}</a></h3>
        <p class="authors">${item.authors}</p>
        <p class="journal"><em>${item.journal}</em> · ${item.volume} · ${item.pages}</p>
        <div class="publication-actions"><a href="/publicacoes/${item.doi ? item.doi : item.page}/">Detalhes <span>↗</span></a><a href="${item.link}" target="_blank" rel="noopener">Ver publicação <span>↗</span></a>${item.doi ? `<a href="https://doi.org/${item.doi}" target="_blank" rel="noopener">DOI <span>↗</span></a>` : ''}</div>
      </div>
    </article>`).join('');
}

document.querySelectorAll('[data-crossref-doi]').forEach((section) => {
  const doi = section.dataset.crossrefDoi, list = section.querySelector('.reference-list'), status = section.querySelector('.references-status');
  if (!doi || !list) return;
  fetch('https://api.crossref.org/works/' + encodeURIComponent(doi)).then(r => { if (!r.ok) throw new Error(); return r.json(); }).then(data => {
    const refs = data.message.reference || [];
    if (!refs.length) throw new Error();
    list.innerHTML = refs.map((ref, i) => '<li>' + [ref.author, ref.year, ref['article-title'] || ref['volume-title'], ref['journal-title'], ref.volume, ref.issue, ref['first-page'] ? 'p. ' + ref['first-page'] : '', ref.DOI ? 'DOI: ' + ref.DOI : ''].filter(Boolean).join('. ') + '</li>').join('');
    status.textContent = refs.length + ' referências verificadas via Crossref.';
  }).catch(() => { status.textContent = 'A lista completa está disponível no registro editorial do DOI.'; });
});
document.querySelectorAll('.bibtex-download').forEach((button) => {
  button.addEventListener('click', () => {
    const blob = new Blob([button.dataset.bibtex], { type: 'application/x-bibtex;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'citacao.bib';
    link.click();
    URL.revokeObjectURL(url);
  });
});

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  const status = document.querySelector('#contact-form-status');
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const subject = String(formData.get('subject') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const body = [
      `Nome: ${name}`,
      `E-mail: ${email}`,
      '',
      message
    ].join('\n');
    const mailto = `mailto:lvpo@ifma.edu.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    if (status) status.textContent = 'Seu aplicativo de e-mail foi aberto com a mensagem preparada.';
  });
}

document.querySelectorAll('.about-page .focus-panel').forEach((panel) => {
  panel.addEventListener('pointermove', (event) => {
    const rect = panel.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 18;
    panel.style.setProperty('--focus-x', String(x.toFixed(1)) + 'px');
    panel.style.setProperty('--focus-y', String(y.toFixed(1)) + 'px');
  });
  panel.addEventListener('pointerleave', () => {
    panel.style.setProperty('--focus-x', '0px');
    panel.style.setProperty('--focus-y', '0px');
  });
});

const newsletterForm = document.querySelector('#newsletter-form');
if (newsletterForm) {
  const status = document.querySelector('#newsletter-status');
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = String(new FormData(newsletterForm).get('email') || '').trim();
    const subject = 'Inscrição para receber notícias do LVPO';
    const body = `Olá, gostaria de receber as notícias e atualizações do LVPO neste e-mail: ${email}`;
    window.location.href = `mailto:lvpo@ifma.edu.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if (status) status.textContent = 'Seu aplicativo de e-mail foi aberto com a solicitação de inscrição.';
  });
}

/* Galeria ampliável da infraestrutura */
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.hidden = true;
lightbox.innerHTML = '<button class="lightbox-close" type="button" aria-label="Fechar imagem">×</button><img alt="">';
document.body.appendChild(lightbox);
const lightboxImage = lightbox.querySelector('img');
const closeLightbox = () => { lightbox.hidden = true; document.body.style.overflow = ''; };
document.querySelectorAll('[data-lightbox-src]').forEach(photo => {
  photo.addEventListener('click', () => {
    lightboxImage.src = photo.dataset.lightboxSrc;
    lightboxImage.alt = photo.dataset.lightboxAlt || '';
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  });
});
lightbox.addEventListener('click', event => {
  if (event.target === lightbox || event.target.classList.contains('lightbox-close')) closeLightbox();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
});


const homeEquipmentList = document.querySelector('#home-equipment-list');
if (homeEquipmentList) {
  fetch('infraestrutura.html')
    .then(response => {
      if (!response.ok) throw new Error('Não foi possível carregar os equipamentos.');
      return response.text();
    })
    .then(html => {
      const infrastructurePage = new DOMParser().parseFromString(html, 'text/html');
      const equipment = [...infrastructurePage.querySelectorAll('.equipment-item .equipment-summary-main strong')]
        .map(item => item.textContent.trim())
        .filter(Boolean);

      if (!equipment.length) throw new Error('Nenhum equipamento encontrado.');

      homeEquipmentList.replaceChildren(...equipment.map((name, index) => {
        const item = document.createElement('a');
        item.href = 'infraestrutura.html#equipment-heading';
        item.className = 'home-equipment-item';
        const number = document.createElement('span');
        number.textContent = String(index + 1).padStart(2, '0');
        const label = document.createElement('strong');
        label.textContent = name;
        item.append(number, label);
        return item;
      }));
    })
    .catch(() => {
      homeEquipmentList.innerHTML = '<p>Consulte os equipamentos disponíveis na página de infraestrutura.</p>';
    });
}


/* Busca, filtro e paginação dos trabalhos em congressos */
const conferenceSearch = document.querySelector('#conference-search');
if (conferenceSearch) {
  const conferenceItems = [...document.querySelectorAll('.conference-item')];
  const conferenceNote = document.querySelector('#conference-results-note');
  const conferencePagination = document.querySelector('#conference-pagination');
  const conferencePageSizeSelect = document.querySelector('#conference-page-size');
  let conferencePageSize = Number(conferencePageSizeSelect?.value || 10);
  let conferenceScope = 'all';
  let conferencePage = 1;
  const normalizeConference = value => String(value || '').toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const renderConferences = () => {
    const term = normalizeConference(conferenceSearch.value.trim());
    const filtered = conferenceItems.filter(item => {
      const matchesScope = conferenceScope === 'all' || item.dataset.conferenceScope === conferenceScope;
      const matchesTerm = !term || normalizeConference(item.textContent).includes(term);
      return matchesScope && matchesTerm;
    });
    const totalPages = Math.max(1, Math.ceil(filtered.length / conferencePageSize));
    conferencePage = Math.min(conferencePage, totalPages);
    const first = (conferencePage - 1) * conferencePageSize;
    const visibleItems = new Set(filtered.slice(first, first + conferencePageSize));
    conferenceItems.forEach(item => item.classList.toggle('is-hidden', !visibleItems.has(item)));
    conferenceNote.textContent = filtered.length
      ? 'Exibindo ' + (first + 1) + '–' + Math.min(first + conferencePageSize, filtered.length) + ' de ' + filtered.length + ' trabalhos em congressos'
      : 'Nenhum trabalho encontrado.';
    if (conferencePagination) {
      conferencePagination.innerHTML = '<button type="button" data-conference-page="' + (conferencePage - 1) + '" ' + (conferencePage === 1 ? 'disabled' : '') + '>Anterior</button>' +
        Array.from({ length: totalPages }, (_, index) => '<button type="button" data-conference-page="' + (index + 1) + '" class="' + (conferencePage === index + 1 ? 'is-active' : '') + '" aria-label="Página ' + (index + 1) + '">' + (index + 1) + '</button>').join('') +
        '<button type="button" data-conference-page="' + (conferencePage + 1) + '" ' + (conferencePage === totalPages ? 'disabled' : '') + '>Próxima</button>';
      conferencePagination.querySelectorAll('button[data-conference-page]').forEach(button => {
        button.addEventListener('click', () => {
          conferencePage = Number(button.dataset.conferencePage);
          renderConferences();
        });
      });
    }
  };
  document.querySelectorAll('.conference-filter-button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.conference-filter-button').forEach(item => item.classList.remove('is-active'));
      button.classList.add('is-active');
      conferenceScope = button.dataset.conferenceFilter;
      conferencePage = 1;
      renderConferences();
    });
  });
  conferenceSearch.addEventListener('input', () => {
    conferencePage = 1;
    renderConferences();
  });
  conferencePageSizeSelect?.addEventListener('change', () => {
    conferencePageSize = Number(conferencePageSizeSelect.value);
    conferencePage = 1;
    renderConferences();
  });
  renderConferences();
}


/* Paginação dinâmica dos periódicos científicos */
const journalPagination = document.querySelector('#journal-pagination');
const journalPaginationList = document.querySelector('#journal-list');
if (journalPagination && journalPaginationList) {
  const journalPageSizeSelect = document.querySelector('#journal-page-size');
  let journalPageSize = Number(journalPageSizeSelect?.value || 10);
  let journalPage = 1;
  const renderJournalPagination = () => {
    const cards = [...journalPaginationList.querySelectorAll('.publication-card')];
    const totalPages = Math.max(1, Math.ceil(cards.length / journalPageSize));
    journalPage = Math.min(journalPage, totalPages);
    const first = (journalPage - 1) * journalPageSize;
    cards.forEach((card, index) => card.classList.toggle('is-hidden', index < first || index >= first + journalPageSize));
    journalPagination.innerHTML = '<button type="button" data-journal-page="' + (journalPage - 1) + '" ' + (journalPage === 1 ? 'disabled' : '') + '>Anterior</button>' +
      Array.from({ length: totalPages }, (_, index) => '<button type="button" data-journal-page="' + (index + 1) + '" class="' + (journalPage === index + 1 ? 'is-active' : '') + '" aria-label="Página ' + (index + 1) + '">' + (index + 1) + '</button>').join('') +
      '<button type="button" data-journal-page="' + (journalPage + 1) + '" ' + (journalPage === totalPages ? 'disabled' : '') + '>Próxima</button>';
    journalPagination.querySelectorAll('button[data-journal-page]').forEach(button => button.addEventListener('click', () => {
      journalPage = Number(button.dataset.journalPage);
      renderJournalPagination();
    }));
  };
  new MutationObserver(() => {
    journalPage = 1;
    renderJournalPagination();
  }).observe(journalPaginationList, { childList: true });
  journalPageSizeSelect?.addEventListener('change', () => {
    journalPageSize = Number(journalPageSizeSelect.value);
    journalPage = 1;
    renderJournalPagination();
  });
  renderJournalPagination();
}


/* Data automática da última atualização da página de publicações */
const publicationUpdatedDate = document.querySelector('#publication-updated-date');
if (publicationUpdatedDate) {
  const modified = new Date(document.lastModified);
  const date = Number.isNaN(modified.getTime()) ? new Date() : modified;
  publicationUpdatedDate.dateTime = date.toISOString().slice(0, 10);
  publicationUpdatedDate.textContent = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric'
  }).format(date);
}
