/**
 * Gifted Space LP - Main JavaScript v5.0
 * Vanilla JS, performance-first approach
 * "Pop & Warm — World-Class NPO" theme
 * Designed for psychological safety - no jarring effects
 */

(function () {
    'use strict';

    // ---- Utilities ----
    function throttle(fn, wait) {
        let last = 0;
        return function () {
            var args = arguments;
            var now = Date.now();
            if (now - last >= wait) {
                last = now;
                fn.apply(this, args);
            }
        };
    }

    function prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    // ---- Initialize Lucide Icons ----
    function initIcons() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
            document.querySelectorAll('svg.lucide').forEach(function (svg) {
                svg.setAttribute('aria-hidden', 'true');
            });
        }
    }

    // ---- Navbar Scroll ----
    function initNavbar() {
        var navbar = document.getElementById('navbar');
        if (!navbar) return;

        var onScroll = throttle(function () {
            if (window.scrollY > 80) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, 100);

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // ---- Mobile Menu ----
    function initMobileMenu() {
        var btn = document.getElementById('menu-btn');
        var menu = document.getElementById('mobile-menu');
        if (!btn || !menu) return;

        var isOpen = false;

        function toggle() {
            isOpen = !isOpen;
            menu.classList.toggle('hidden', !isOpen);
            menu.classList.toggle('flex', isOpen);
            btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            menu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
            document.body.style.overflow = isOpen ? 'hidden' : '';

            if (typeof lucide !== 'undefined') {
                btn.innerHTML = '';
                var newIcon = document.createElement('i');
                newIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
                newIcon.className = 'w-6 h-6';
                btn.appendChild(newIcon);
                lucide.createIcons({ nodes: [btn] });
            }
        }

        function close() {
            if (!isOpen) return;
            isOpen = false;
            menu.classList.add('hidden');
            menu.classList.remove('flex');
            btn.setAttribute('aria-expanded', 'false');
            menu.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            btn.focus();

            if (typeof lucide !== 'undefined') {
                btn.innerHTML = '';
                var newIcon = document.createElement('i');
                newIcon.setAttribute('data-lucide', 'menu');
                newIcon.className = 'w-6 h-6';
                btn.appendChild(newIcon);
                lucide.createIcons({ nodes: [btn] });
            }
        }

        btn.addEventListener('click', toggle);
        menu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', close);
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && isOpen) {
                e.stopImmediatePropagation();
                close();
            }
        });
        menu.addEventListener('click', function (e) {
            if (e.target === menu) close();
        });

        // Focus trap
        menu.addEventListener('keydown', function (e) {
            if (e.key !== 'Tab' || !isOpen) return;
            var focusable = menu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
            if (focusable.length === 0) return;
            var first = focusable[0];
            var last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        });
    }

    // ---- Scroll Reveal (supports .reveal, .reveal-left, .reveal-right) ----
    function initReveal() {
        var selectors = '.reveal, .reveal-left, .reveal-right';
        var elements = document.querySelectorAll(selectors);

        if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
            elements.forEach(function (el) {
                el.classList.add('revealed');
            });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: '0px 0px -40px 0px'
        });

        elements.forEach(function (el) {
            observer.observe(el);
        });
    }

    // ---- Smooth Scroll ----
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function (link) {
            link.addEventListener('click', function (e) {
                var targetId = this.getAttribute('href');
                if (!targetId || targetId === '#') return;

                var target;
                try {
                    target = document.querySelector(targetId);
                } catch (err) {
                    return; // invalid selector in href
                }
                if (!target) return;

                e.preventDefault();
                var offset = 80;
                var targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

                if (prefersReducedMotion()) {
                    window.scrollTo(0, targetPosition);
                } else {
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }

                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            });
        });
    }

    // ---- Tab System ----
    function initTabs() {
        var tabBtns = document.querySelectorAll('.tab-btn');
        var tabPanels = document.querySelectorAll('.tab-panel');

        tabBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var targetId = this.getAttribute('aria-controls');

                // Deactivate all
                tabBtns.forEach(function (b) {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                    b.setAttribute('tabindex', '-1');
                });
                tabPanels.forEach(function (p) {
                    p.classList.remove('active');
                });

                // Activate selected
                this.classList.add('active');
                this.setAttribute('aria-selected', 'true');
                this.setAttribute('tabindex', '0');
                var panel = document.getElementById(targetId);
                if (panel) panel.classList.add('active');
            });
        });

        // Keyboard navigation for tabs
        var tabList = document.querySelector('[role="tablist"]');
        if (tabList) {
            tabList.addEventListener('keydown', function (e) {
                var tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));
                var index = tabs.indexOf(document.activeElement);
                if (index < 0) return;

                if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    var next = e.key === 'ArrowRight' ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
                    tabs[next].focus();
                    tabs[next].click();
                }
            });
        }
    }

    // ---- FAQ Accordion ----
    function initFAQ() {
        var faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(function (item) {
            var trigger = item.querySelector('.faq-trigger');
            var answer = item.querySelector('.faq-answer');
            if (!trigger || !answer) return;

            trigger.addEventListener('click', function () {
                var isOpen = !answer.classList.contains('hidden');

                // Close all other items
                faqItems.forEach(function (other) {
                    if (other !== item) {
                        var otherAnswer = other.querySelector('.faq-answer');
                        var otherTrigger = other.querySelector('.faq-trigger');
                        if (otherAnswer && !otherAnswer.classList.contains('hidden')) {
                            otherAnswer.classList.add('hidden');
                            other.classList.remove('open');
                            if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
                        }
                    }
                });

                // Toggle current
                if (isOpen) {
                    answer.classList.add('hidden');
                    item.classList.remove('open');
                    trigger.setAttribute('aria-expanded', 'false');
                } else {
                    answer.classList.remove('hidden');
                    item.classList.add('open');
                    trigger.setAttribute('aria-expanded', 'true');
                }
            });
        });
    }

    // ---- Counter Animation ----
    function initCounters() {
        var counters = document.querySelectorAll('.counter');
        if (counters.length === 0) return;

        if (prefersReducedMotion()) {
            counters.forEach(function (el) { el.textContent = el.dataset.target || '0'; });
            return;
        }

        if (typeof IntersectionObserver === 'undefined') {
            counters.forEach(function (el) { el.textContent = el.dataset.target || '0'; });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(function (el) { observer.observe(el); });
    }

    function animateCounter(el) {
        var target = parseInt(el.dataset.target, 10);
        if (isNaN(target)) { el.textContent = el.dataset.target || '0'; return; }
        var duration = 2000;
        var start = performance.now();

        function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }

        function update(now) {
            var elapsed = now - start;
            var progress = Math.min(elapsed / duration, 1);
            el.textContent = Math.round(easeOutExpo(progress) * target);
            if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }

    // ---- Next Saturday Calculator ----
    function initNextSaturday() {
        var el = document.getElementById('next-saturday');
        if (!el) return;

        var now = new Date();
        var dayOfWeek = now.getDay();
        var daysUntilSat = (6 - dayOfWeek) % 7;
        if (daysUntilSat === 0 && now.getHours() >= 17) daysUntilSat = 7;

        var nextSat = new Date(now);
        nextSat.setDate(now.getDate() + daysUntilSat);

        var month = nextSat.getMonth() + 1;
        var day = nextSat.getDate();
        var dayNames = ['\u65E5', '\u6708', '\u706B', '\u6C34', '\u6728', '\u91D1', '\u571F'];
        el.textContent = '\u6B21\u56DE ' + month + '/' + day + '\uFF08' + dayNames[nextSat.getDay()] + '\uFF0913:30\u301C';
    }

    // ---- Quick Exit ----
    function initQuickExit() {
        var btn = document.getElementById('quick-exit');
        if (!btn) return;

        function exit() {
            window.location.replace('https://www.google.co.jp');
        }

        btn.addEventListener('click', exit);

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') exit();
        });
    }

    // ---- Mobile Bottom Bar visibility ----
    function initMobileBar() {
        var bar = document.getElementById('mobile-bottom-bar');
        if (!bar) return;

        var handler = throttle(function () {
            if (window.scrollY > window.innerHeight * 0.5) {
                bar.style.transform = 'translateY(0)';
                bar.style.opacity = '1';
            } else {
                bar.style.transform = 'translateY(100%)';
                bar.style.opacity = '0';
            }
        }, 100);

        bar.style.transform = 'translateY(100%)';
        bar.style.opacity = '0';
        bar.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

        window.addEventListener('scroll', handler, { passive: true });
    }

    // ---- Performance: Pause when hidden ----
    function initVisibilityHandler() {
        document.addEventListener('visibilitychange', function () {
            var state = document.hidden ? 'paused' : 'running';
            document.querySelectorAll('.gradient-text, .orb, .orb-cta-1, .orb-cta-2').forEach(function (el) {
                el.style.animationPlayState = state;
            });
        });
    }

    // ---- Initialize Everything ----
    function safeInit(fn) {
        try { fn(); } catch (e) {
            if (typeof console !== 'undefined' && console.error) {
                console.error('Init error in ' + (fn.name || 'anonymous') + ':', e);
            }
        }
    }

    function init() {
        var modules = [
            initIcons,
            initNavbar,
            initMobileMenu,
            initReveal,
            initSmoothScroll,
            initTabs,
            initFAQ,
            initCounters,
            initNextSaturday,
            initQuickExit,
            initMobileBar,
            initVisibilityHandler
        ];
        for (var i = 0; i < modules.length; i++) {
            safeInit(modules[i]);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
