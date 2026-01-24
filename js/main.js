/**
 * Gifted Space - Ultimate Premium JavaScript
 * ギフテッドスペース 最高品質インタラクション
 */

// =============================================
// DOM Ready
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    initLucideIcons();
    initNavbarScroll();
    initMobileMenu();
    initRevealAnimations();
    initSmoothScroll();
    initParallaxEffects();
    initMouseFollowEffects();
    initTypingEffect();
    initCounterAnimations();
    initMagneticButtons();
    initTiltCards();
});

// =============================================
// Initialize Lucide Icons
// =============================================
function initLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// =============================================
// Enhanced Navbar with Hide/Show on Scroll
// =============================================
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let lastScroll = 0;
    let ticking = false;
    const scrollThreshold = 100;

    const handleScroll = () => {
        const currentScroll = window.scrollY;

        // Add glass effect when scrolled
        if (currentScroll > scrollThreshold) {
            navbar.classList.add('glass', 'shadow-lg');
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.classList.remove('glass', 'shadow-lg');
            navbar.style.padding = '1rem 0';
        }

        // Hide/show on scroll direction (optional - uncomment if desired)
        // if (currentScroll > lastScroll && currentScroll > 500) {
        //     navbar.style.transform = 'translateY(-100%)';
        // } else {
        //     navbar.style.transform = 'translateY(0)';
        // }

        lastScroll = currentScroll;
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(handleScroll);
            ticking = true;
        }
    });

    handleScroll();
}

// =============================================
// Enhanced Mobile Menu with Staggered Animation
// =============================================
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (!menuBtn || !mobileMenu || !menuIcon) return;

    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;

        if (isOpen) {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
            menuIcon.setAttribute('data-lucide', 'x');
            document.body.style.overflow = 'hidden';

            // Staggered animation for menu items
            const menuItems = mobileMenu.querySelectorAll('a, button, div');
            menuItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    item.style.transition = 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 80 + (index * 60));
            });
        } else {
            // Reverse animation
            const menuItems = mobileMenu.querySelectorAll('a, button, div');
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(-20px)';
                }, index * 30);
            });

            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                menuIcon.setAttribute('data-lucide', 'menu');
                document.body.style.overflow = '';
            }, 300);
        }

        initLucideIcons();
    }

    menuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isOpen) toggleMenu();
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) toggleMenu();
    });
}

// =============================================
// Advanced Reveal Animations with Intersection Observer
// =============================================
function initRevealAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add active class with slight delay for stagger effect
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, delay);
            }
        });
    }, observerOptions);

    // Observe all reveal elements
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el, index) => {
        // Add stagger delay based on position
        if (!el.dataset.delay) {
            el.dataset.delay = (index % 5) * 100;
        }
        observer.observe(el);
    });
}

// =============================================
// Enhanced Smooth Scroll with Easing
// =============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();

                const navbarHeight = document.getElementById('navbar')?.offsetHeight || 80;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;

                // Custom smooth scroll with easing
                smoothScrollTo(targetPosition, 1000);
            }
        });
    });
}

function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Easing function: easeInOutCubic
        const ease = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// =============================================
// Parallax Effects for Hero Section
// =============================================
function initParallaxEffects() {
    const heroSection = document.querySelector('section:first-of-type');
    if (!heroSection) return;

    const orbs = heroSection.querySelectorAll('.orb');
    const heroImage = heroSection.querySelector('.hero-image-container');

    if (window.innerWidth < 768) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const heroHeight = heroSection.offsetHeight;

                if (scrollY < heroHeight) {
                    // Parallax for orbs
                    orbs.forEach((orb, index) => {
                        const speed = 0.05 + (index * 0.03);
                        const yPos = scrollY * speed;
                        const scale = 1 + (scrollY * 0.0001);
                        orb.style.transform = `translateY(${yPos}px) scale(${scale})`;
                    });

                    // Parallax for hero image
                    if (heroImage) {
                        heroImage.style.transform = `translateY(${scrollY * 0.1}px)`;
                    }
                }

                ticking = false;
            });
            ticking = true;
        }
    });
}

// =============================================
// Mouse Follow Effects for Hero Section
// =============================================
function initMouseFollowEffects() {
    const heroSection = document.querySelector('section:first-of-type');
    if (!heroSection || window.innerWidth < 1024) return;

    const orbs = heroSection.querySelectorAll('.orb');

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        mouseX = (e.clientX - rect.left - rect.width / 2) / rect.width;
        mouseY = (e.clientY - rect.top - rect.height / 2) / rect.height;
    });

    function animateOrbs() {
        // Smooth interpolation
        currentX += (mouseX - currentX) * 0.05;
        currentY += (mouseY - currentY) * 0.05;

        orbs.forEach((orb, index) => {
            const factor = 30 + (index * 15);
            const x = currentX * factor;
            const y = currentY * factor;
            orb.style.transform = `translate(${x}px, ${y}px)`;
        });

        requestAnimationFrame(animateOrbs);
    }

    animateOrbs();
}

// =============================================
// Typing Effect for Headlines (Optional)
// =============================================
function initTypingEffect() {
    const typingElements = document.querySelectorAll('[data-typing]');

    typingElements.forEach(el => {
        const text = el.textContent;
        const speed = parseInt(el.dataset.typingSpeed) || 50;

        el.textContent = '';
        el.style.borderRight = '2px solid currentColor';

        let i = 0;
        function type() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                el.style.borderRight = 'none';
            }
        }

        // Start when element is visible
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                type();
                observer.disconnect();
            }
        });

        observer.observe(el);
    });
}

// =============================================
// Counter Animations for Statistics
// =============================================
function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-counter]');
    if (counters.length === 0) return;

    const observerOptions = {
        root: null,
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-counter'), 10);
    const duration = parseInt(element.dataset.duration) || 2000;
    const start = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);

        // Easing: easeOutExpo
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

        element.textContent = Math.round(target * ease);

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// =============================================
// Magnetic Button Effect
// =============================================
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-glow');

    if (window.innerWidth < 1024) return;

    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });
}

// =============================================
// 3D Tilt Effect for Cards
// =============================================
function initTiltCards() {
    const cards = document.querySelectorAll('.premium-card');

    if (window.innerWidth < 1024) return;

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.320, 1)';
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease';
        });
    });
}

// =============================================
// Utility Functions
// =============================================
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// =============================================
// Handle Window Resize
// =============================================
window.addEventListener('resize', debounce(() => {
    // Re-initialize effects that depend on screen size
    if (window.innerWidth >= 1024) {
        initParallaxEffects();
        initMouseFollowEffects();
        initMagneticButtons();
        initTiltCards();
    }
}, 250));

// =============================================
// Page Load Animations
// =============================================
window.addEventListener('load', () => {
    // Remove any loading states
    document.body.classList.add('loaded');

    // Trigger initial animations
    document.querySelectorAll('.reveal').forEach((el, index) => {
        setTimeout(() => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add('active');
            }
        }, index * 100);
    });
});

// =============================================
// Performance: Pause animations when tab is hidden
// =============================================
document.addEventListener('visibilitychange', () => {
    const orbs = document.querySelectorAll('.orb');
    if (document.hidden) {
        orbs.forEach(orb => orb.style.animationPlayState = 'paused');
    } else {
        orbs.forEach(orb => orb.style.animationPlayState = 'running');
    }
});
