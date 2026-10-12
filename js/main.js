document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    var langBtn = document.getElementById('lang-toggle');
    var currentLang = 'es';

    window.addEventListener('scroll', function () {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    toggle.addEventListener('click', function () {
        links.classList.toggle('open');
    });

    document.querySelectorAll('.nav-links a').forEach(function (link) {
        link.addEventListener('click', function () {
            links.classList.remove('open');
        });
    });

    langBtn.addEventListener('click', function () {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        langBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';
        document.documentElement.lang = currentLang;

        document.querySelectorAll('[data-es][data-en]').forEach(function (el) {
            var text = el.getAttribute('data-' + currentLang);
            if (text) el.innerHTML = text;
        });
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.evidence-card, .law-card, .stat-card, .timeline-item, .contact-card, .info-card, .motivo-item, .press-dropdown, .alert-fact').forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
