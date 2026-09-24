/* Project details page — reads ?id=... and renders from PROJECTS */
(function () {
  'use strict';

  function currentProject() {
    var id = new URLSearchParams(location.search).get('id');
    for (var i = 0; i < PROJECTS.length; i++) if (PROJECTS[i].id === id) return PROJECTS[i];
    return null;
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  window.renderProject = function () {
    var lang = getLang(), t = T;
    var p = currentProject();
    var $ = function (id) { return document.getElementById(id); };

    $('pBack').innerHTML = icon('arrow', 'ic ic-arrow ic-back') + '<span>' + t('proj.back') + '</span>';

    if (!p) {
      document.title = t('proj.notfound');
      $('pTitle').textContent = t('proj.notfound');
      $('pCat').hidden = true; $('pSummary').textContent = '';
      $('pBody').innerHTML = ''; $('pMoreSec').hidden = true;
      return;
    }

    var d = p[lang];
    document.title = d.title + ' | ' + t('brand.name');
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', d.summary);

    $('pHeroImg').style.backgroundImage = 'url(assets/img/' + p.image + ')';
    $('pCat').textContent = d.category;
    $('pTitle').textContent = d.title;
    $('pSummary').textContent = d.summary;

    var info = [
      ['proj.sector', d.sector], ['proj.location', d.location],
      ['proj.year', p.year], ['proj.duration', d.duration], ['proj.status', t('proj.status.v')]
    ].map(function (r) { return '<li><span>' + t(r[0]) + '</span><b>' + esc(r[1]) + '</b></li>'; }).join('');

    $('pBody').innerHTML =
      '<div class="p-main">' +
        '<h2>' + t('proj.overview') + '</h2>' +
        d.overview.map(function (x) { return '<p>' + x + '</p>'; }).join('') +
        '<h3>' + t('proj.scope') + '</h3>' +
        '<ul class="checks">' + d.scope.map(function (x) { return '<li>' + icon('check', 'ic ic-check') + '<span>' + x + '</span></li>'; }).join('') + '</ul>' +
        '<h3>' + t('proj.specs') + '</h3>' +
        '<div class="specs">' + d.specs.map(function (s) { return '<div><span>' + s[0] + '</span><b>' + s[1] + '</b></div>'; }).join('') + '</div>' +
      '</div>' +
      '<aside class="p-side"><div class="info-card"><h3>' + t('proj.info') + '</h3><ul>' + info + '</ul>' +
        '<a class="btn btn-primary btn-block" href="index.html#contact"><span>' + t('proj.cta.b') + '</span></a></div></aside>';

    /* gallery: only when the project has extra photos */
    var extra = p.gallery || [];
    var gal = $('pGallerySec');
    if (extra.length) {
      gal.hidden = false;
      $('pGallery').innerHTML = [p.image].concat(extra).map(function (f) {
        return '<button type="button" class="g-item" data-src="assets/img/' + f + '"><img src="assets/img/' + f + '" alt="' + esc(d.title) + '" loading="lazy"></button>';
      }).join('');
    } else { gal.hidden = true; }

    /* other projects */
    $('pMore').innerHTML = PROJECTS.filter(function (x) { return x.id !== p.id; }).slice(0, 3).map(function (x, i) {
      var y = x[lang];
      return '<a class="project reveal" style="--d:' + (i * 70) + 'ms" href="project.html?id=' + x.id + '">' +
        '<div class="project-img"><img src="assets/img/' + x.image + '" alt="' + esc(y.title) + '" loading="lazy" width="1376" height="768"></div>' +
        '<div class="project-body"><span class="chip">' + y.category + '</span><h3>' + y.title + '</h3><p>' + y.summary + '</p>' +
        '<span class="project-more">' + t('projects.view') + icon('arrow', 'ic ic-arrow') + '</span></div></a>';
    }).join('');
  };

  /* lightbox */
  document.addEventListener('click', function (e) {
    var lb = document.getElementById('lightbox');
    var item = e.target.closest('.g-item');
    if (item) { lb.querySelector('img').src = item.getAttribute('data-src'); lb.hidden = false; return; }
    if (!lb.hidden && (e.target === lb || e.target.closest('#lightbox button'))) lb.hidden = true;
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') document.getElementById('lightbox').hidden = true;
  });
})();
