(function () {
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('[data-site-nav]');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var sectionLinks = document.querySelectorAll('.site-nav a[href^="#"]');
  var sections = Array.from(sectionLinks)
    .map(function (link) {
      return document.querySelector(link.getAttribute('href'));
    })
    .filter(Boolean);

  function markActive() {
    var pos = window.scrollY + 120;
    var activeId = '';
    sections.forEach(function (section) {
      if (section.offsetTop <= pos) {
        activeId = section.id;
      }
    });
    sectionLinks.forEach(function (link) {
      var target = link.getAttribute('href').slice(1);
      link.classList.toggle('active', target === activeId);
    });
  }

  if (sections.length) {
    window.addEventListener('scroll', markActive, { passive: true });
    markActive();
  }
})();
