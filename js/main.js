/**
 * Halo Fansite - Main JavaScript
 * Features: Dark mode, mobile menu, lightbox, scroll animations, scroll-to-top
 */

(function() {
    'use strict';

    // ==========================================================================
    // Dark Mode Toggle
    // ==========================================================================
    const initDarkMode = () => {
        const toggle = document.getElementById('theme-toggle');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

        // Check for saved preference or system preference
        const getThemePreference = () => {
            const saved = localStorage.getItem('theme');
            if (saved) return saved;
            return prefersDark.matches ? 'dark' : 'light';
        };

        const setTheme = (theme) => {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);

            if (toggle) {
                toggle.setAttribute('aria-pressed', theme === 'dark');
                toggle.innerHTML = theme === 'dark'
                    ? '<span class="icon">☀️</span><span class="sr-only">Switch to light mode</span>'
                    : '<span class="icon">🌙</span><span class="sr-only">Switch to dark mode</span>';
            }
        };

        // Initialize theme
        setTheme(getThemePreference());

        // Toggle handler
        if (toggle) {
            toggle.addEventListener('click', () => {
                const current = document.documentElement.getAttribute('data-theme');
                setTheme(current === 'dark' ? 'light' : 'dark');
            });
        }

        // Listen for system preference changes
        prefersDark.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        });
    };

    // ==========================================================================
    // Mobile Menu Toggle
    // ==========================================================================
    const initMobileMenu = () => {
        const menuToggle = document.getElementById('menu-toggle');
        const navMenu = document.getElementById('nav-menu');

        if (!menuToggle || !navMenu) return;

        menuToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('is-open');
            menuToggle.classList.toggle('is-open', isOpen);
            menuToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('is-open');
                menuToggle.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
                navMenu.classList.remove('is-open');
                menuToggle.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.focus();
            }
        });
    };

    // ==========================================================================
    // Image Lightbox
    // ==========================================================================
    const initLightbox = () => {
        // Create lightbox elements
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
            <img class="lightbox-image" src="" alt="">
            <p class="lightbox-caption"></p>
        `;
        document.body.appendChild(lightbox);

        const lightboxImage = lightbox.querySelector('.lightbox-image');
        const lightboxCaption = lightbox.querySelector('.lightbox-caption');
        const closeBtn = lightbox.querySelector('.lightbox-close');

        // Make card images clickable
        const cardImages = document.querySelectorAll('.card-image img, .character-card img, .equipment-card img');

        cardImages.forEach(img => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', () => {
                lightboxImage.src = img.src;
                lightboxCaption.textContent = img.alt;
                lightbox.classList.add('is-open');
                document.body.style.overflow = 'hidden';
                closeBtn.focus();
            });
        });

        // Close handlers
        const closeLightbox = () => {
            lightbox.classList.remove('is-open');
            document.body.style.overflow = '';
        };

        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
                closeLightbox();
            }
        });
    };

    // ==========================================================================
    // Scroll Animations (Intersection Observer)
    // ==========================================================================
    const initScrollAnimations = () => {
        const animatedElements = document.querySelectorAll('.card, .hero-content, .stat-item, .location-card');

        if (!animatedElements.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    };

    // ==========================================================================
    // Scroll to Top Button
    // ==========================================================================
    const initScrollToTop = () => {
        const scrollBtn = document.createElement('button');
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.innerHTML = '<span aria-hidden="true">↑</span><span class="sr-only">Scroll to top</span>';
        scrollBtn.setAttribute('aria-label', 'Scroll to top');
        document.body.appendChild(scrollBtn);

        // Show/hide based on scroll position
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                scrollBtn.classList.add('is-visible');
            } else {
                scrollBtn.classList.remove('is-visible');
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };

    // ==========================================================================
    // Page Transition Effect
    // ==========================================================================
    const initPageTransitions = () => {
        // Add loaded class after page loads
        document.body.classList.add('page-loaded');

        // Handle link clicks for transition effect
        const internalLinks = document.querySelectorAll('a[href$=".html"]');

        internalLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');

                // Don't transition for same page or external links
                if (href === window.location.pathname.split('/').pop()) return;

                e.preventDefault();
                document.body.classList.add('page-transitioning');

                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            });
        });
    };

    // ==========================================================================
    // Smooth Scroll for Anchor Links
    // ==========================================================================
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const targetId = anchor.getAttribute('href');
                if (targetId === '#') return;

                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };

    // ==========================================================================
    // Initialize Everything
    // ==========================================================================
    const init = () => {
        initDarkMode();
        initMobileMenu();
        initLightbox();
        initScrollAnimations();
        initScrollToTop();
        initPageTransitions();
        initSmoothScroll();
    };

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
