(function () {
    'use strict';

    const themeKey = 'dr-yaghmaei-theme';
    const html = document.documentElement;

    function setTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem(themeKey, theme);
        document.querySelectorAll('.theme-toggle i').forEach(function (icon) {
            icon.className = theme === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';
        });
    }

    setTheme(localStorage.getItem(themeKey) || 'light');

    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
        btn.addEventListener('click', function () {
            setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
        });
    });

    // Close mobile nav on link click
    var navCollapse = document.getElementById('nav');
    if (navCollapse) {
        navCollapse.querySelectorAll('.nav-link, .btn-accent').forEach(function (link) {
            link.addEventListener('click', function () {
                if (window.innerWidth < 992 && navCollapse.classList.contains('show')) {
                    bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
                }
            });
        });
    }

    // Admin sidebar toggle
    var menuBtn = document.getElementById('adminMenuToggle');
    var sidebar = document.querySelector('.admin-sidebar');
    var overlay = document.getElementById('sidebarOverlay');
    if (menuBtn && sidebar) {
        function closeSidebar() {
            sidebar.classList.remove('open');
            overlay && overlay.classList.remove('show');
            document.body.style.overflow = '';
        }
        function openSidebar() {
            sidebar.classList.add('open');
            overlay && overlay.classList.add('show');
            document.body.style.overflow = 'hidden';
        }
        menuBtn.addEventListener('click', function () {
            sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
        });
        overlay && overlay.addEventListener('click', closeSidebar);
        sidebar.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                if (window.innerWidth < 992) closeSidebar();
            });
        });
    }

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js?v=2').catch(function () {});
    }
})();
