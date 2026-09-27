/* Shared behaviour: language toggle, header, reveal-on-scroll, page rendering */
(function () {
  'use strict';

  var LS_KEY = 'gebaly-lang';
  var lang = 'ar';
  try { lang = localStorage.getItem(LS_KEY) || 'ar'; } catch (e) {}
  if (lang !== 'ar' && lang !== 'en') lang = 'ar';

  var t = function (k) { return (I18N[lang] && I18N[lang][k]) || ''; };
  window.T = t;
  window.getLang = function () { return lang; };

  /* ---------- static text ---------- */
  function applyStatic() {
    var html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });

    var pageTitle = document.body.getAttribute('data-title-key');
    if (!pageTitle) {
      document.title = t('meta.title');
      var md = document.querySelector('meta[name="description"]');
      if (md) md.setAttribute('content', t('meta.desc'));
    }

    var sw = document.getElementById('langSwitch');
    if (sw) {
      sw.querySelector('span').textContent = t('lang.switch');
      sw.setAttribute('aria-label', t('lang.aria'));
    }
  }

  /* ---------- home page renderers ---------- */
  function renderHome() {
    var $ = function (id) { return document.getElementById(id); };
    if (!$('heroTags')) return;

    $('heroTags').innerHTML = t('hero.tags').map(function (x) { return '<li>' + x + '</li>'; }).join('');

    $('aboutPoints').innerHTML = t('about.points').map(function (x) {
      return '<li>' + icon('check', 'ic ic-check') + '<span>' + x + '</span></li>';
    }).join('');

    $('servicesGrid').innerHTML = t('services.list').map(function (s, i) {
      return '<article class="card service reveal" style="--d:' + (i * 70) + 'ms">' +
        '<div class="icon-box">' + icon(s.icon) + '</div><h3>' + s.t + '</h3><p>' + s.d + '</p></article>';
    }).join('');

    $('projectsGrid').innerHTML = PROJECTS.map(function (p, i) {
      var d = p[lang];
      return '<a class="project reveal" style="--d:' + (i * 70) + 'ms" href="project.html?id=' + p.id + '">' +
        '<div class="project-img"><img src="assets/img/' + p.image + '" alt="' + d.title + '" loading="lazy" width="1376" height="768"></div>' +
        '<div class="project-body">' +
        '<span class="chip">' + d.category + '</span>' +
        '<h3>' + d.title + '</h3><p>' + d.summary + '</p>' +
        '<span class="project-more">' + t('projects.view') + icon('arrow', 'ic ic-arrow') + '</span>' +
        '</div></a>';
    }).join('');

    $('sectorsGrid').innerHTML = t('sectors.list').map(function (s, i) {
      return '<article class="sector reveal" style="--d:' + (i * 70) + 'ms">' +
        '<div class="icon-box light">' + icon(s.icon) + '</div><div><h3>' + s.t + '</h3><p>' + s.d + '</p></div></article>';
    }).join('');

    $('partnersGrid').innerHTML = t('partners.list').map(function (s, i) {
      return '<div class="partner reveal" style="--d:' + (i * 60) + 'ms">' +
        '<img src="assets/img/partners/' + s.logo + '" alt="' + s.t + '" loading="lazy">' +
        '<span class="partner-name">' + s.t + '</span></div>';
    }).join('');

    var sel = $('fService');
    if (sel) {
      var cur = sel.value;
      sel.innerHTML = '<option value="">' + t('form.service.ph') + '</option>' +
        t('services.list').map(function (s) { return '<option>' + s.t + '</option>'; }).join('');
      sel.value = cur && Array.prototype.some.call(sel.options, function (o) { return o.value === cur; }) ? cur : '';
    }

    ['stats.1', 'stats.2', 'stats.3', 'stats.4'].forEach(function (k, i) {
      var el = $('stat' + (i + 1));
      if (!el) return;
      el.setAttribute('data-target', t(k + '.v'));
      el.setAttribute('data-suffix', t(k + '.s') || '+');
    });
    countUpAll();
  }

  /* ---------- count-up numbers ---------- */
  var countedOnce = false;
  function countUpAll() {
    var els = document.querySelectorAll('.stat-num');
    els.forEach(function (el) {
      var target = +el.getAttribute('data-target') || 0;
      var suffix = el.getAttribute('data-suffix') || '';
      if (!countedOnce) { el.textContent = '0' + suffix; } else { el.textContent = target + suffix; }
    });
    if (countedOnce || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.textContent = (el.getAttribute('data-target') || 0) + (el.getAttribute('data-suffix') || ''); });
      return;
    }
    var box = document.querySelector('.stats');
    if (!box) return;
    var io = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      io.disconnect(); countedOnce = true;
      els.forEach(function (el) {
        var target = +el.getAttribute('data-target') || 0;
        var suffix = el.getAttribute('data-suffix') || '';
        var start = performance.now(), dur = 1400;
        (function tick(now) {
          var p = Math.min((now - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        })(start);
      });
    }, { threshold: .4 });
    io.observe(box);
  }

  /* ---------- reveal on scroll ---------- */
  var revealIO = null;
  function observeReveals() {
    var els = document.querySelectorAll('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    if (!revealIO) {
      revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); revealIO.unobserve(en.target); }
        });
      }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    }
    els.forEach(function (e) { revealIO.observe(e); });
  }

  /* ---------- hero slideshow ---------- */
  function initHero() {
    var wrap = document.getElementById('heroSlides');
    if (!wrap || wrap.children.length) return;
    HERO_IMAGES.forEach(function (f, i) {
      var d = document.createElement('div');
      d.className = 'hero-slide' + (i === 0 ? ' active' : '');
      d.style.backgroundImage = 'url(assets/img/' + f + ')';
      wrap.appendChild(d);
    });
    var slides = wrap.children, n = 0;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setInterval(function () {
      slides[n].classList.remove('active');
      n = (n + 1) % slides.length;
      slides[n].classList.add('active');
    }, 6500);
  }

  /* ---------- header ---------- */
  function initHeader() {
    var header = document.getElementById('header');
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('nav');
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 24); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { document.body.classList.remove('nav-open'); toggle.setAttribute('aria-expanded', 'false'); }
    });

    /* scroll-spy (home page only) */
    var links = nav.querySelectorAll('a[data-spy]');
    if (!links.length || !('IntersectionObserver' in window)) return;
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('data-spy')] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          links.forEach(function (a) { a.classList.remove('active'); });
          map[en.target.id].classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
  }

  /* ---------- contact form -> mailto ---------- */
  function initForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = function (id) { return (document.getElementById(id).value || '').trim(); };
      var body = t('form.name') + ': ' + v('fName') + '\n' +
        t('form.phone') + ': ' + v('fPhone') + '\n' +
        t('form.email') + ': ' + v('fEmail') + '\n' +
        t('form.service') + ': ' + v('fService') + '\n\n' + v('fMsg');
      window.location.href = 'mailto:' + SITE.email +
        '?subject=' + encodeURIComponent(t('form.subject') + ' - ' + v('fName')) +
        '&body=' + encodeURIComponent(body);
    });
  }

  /* ---------- language switch ---------- */
  function setLang(next) {
    lang = next;
    try { localStorage.setItem(LS_KEY, lang); } catch (e) {}
    applyStatic();
    renderHome();
    if (window.renderProject) window.renderProject();
    observeReveals();
  }

  function initLang() {
    var sw = document.getElementById('langSwitch');
    sw.addEventListener('click', function () { setLang(lang === 'ar' ? 'en' : 'ar'); });
  }

  function init() {
    applyStatic();
    renderHome();
    if (window.renderProject) window.renderProject();
    initHeader(); initLang(); initForm(); initHero();
    document.querySelectorAll('[data-year]').forEach(function (e) { e.textContent = new Date().getFullYear(); });
    observeReveals();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
