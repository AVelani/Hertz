/**
 * HertzInnovation Landing Page JavaScript
 * Main interactive functionality for industrial automation website
 */

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Show loading animation
    showLoadingAnimation();
    
    // Initialize all functionality with staggered loading
    setTimeout(() => {
        initNavigation();
        initSmoothScrolling();
        initServiceCards();
        initAnimations();
        initMobileMenu();
        initAdvancedFeatures();
        hideLoadingAnimation();
    }, 500);
});

/**
 * Show loading animation
 */
function showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.innerHTML = `
        <div class="loading-spinner"></div>
        <p style="color: var(--primary-color); margin-top: 1rem; font-weight: 600;">Loading HertzInnovation...</p>
    `;
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--dark-bg);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;
    document.body.appendChild(loader);
}

/**
 * Hide loading animation
 */
function hideLoadingAnimation() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(loader);
        }, 500);
    }
}

/**
 * Initialize advanced interactive features
 */
function initAdvancedFeatures() {
    // Initialize cursor effects
    initCustomCursor();
    
    // Initialize floating action button
    initFloatingActionButton();
    
    // Initialize keyboard shortcuts
    initKeyboardShortcuts();
    
    // Initialize advanced hover effects
    initAdvancedHoverEffects();
    
    // Initialize performance monitoring
    initPerformanceMonitoring();
}

/**
 * Custom cursor effects
 */
function initCustomCursor() {
    // Only on desktop devices
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            transition: transform 0.1s ease;
            opacity: 0;
            mix-blend-mode: difference;
        `;
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
            cursor.style.opacity = '1';
        });
        
        // Scale cursor on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .service-card, .nav-link');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursor.style.background = 'var(--accent-color)';
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = 'var(--primary-color)';
            });
        });
    }
}

/**
 * Floating action button for quick contact
 */
function initFloatingActionButton() {
    const fab = document.createElement('div');
    fab.className = 'floating-action-btn';
    fab.innerHTML = '💬';
    fab.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        background: var(--gradient-primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        cursor: pointer;
        box-shadow: var(--shadow-large);
        z-index: 1000;
        transition: all 0.3s ease;
        opacity: 0;
        transform: scale(0);
    `;
    
    document.body.appendChild(fab);
    
    // Show FAB after page load
    setTimeout(() => {
        fab.style.opacity = '1';
        fab.style.transform = 'scale(1)';
    }, 2000);
    
    fab.addEventListener('click', function() {
        // Scroll to contact section
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        
        // Add click animation
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
    
    fab.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = 'var(--shadow-glow-hover)';
    });
    
    fab.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'var(--shadow-large)';
    });
    
    // Hide/show based on scroll position
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', throttle(function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            // Scrolling down
            fab.style.transform = 'scale(0)';
            fab.style.opacity = '0';
        } else if (currentScrollY < lastScrollY) {
            // Scrolling up
            fab.style.transform = 'scale(1)';
            fab.style.opacity = '1';
        }
        
        lastScrollY = currentScrollY;
    }, 100));
}

/**
 * Keyboard shortcuts
 */
function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Alt + H: Go to home
        if (e.altKey && e.key === 'h') {
            e.preventDefault();
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        }
        
        // Alt + S: Go to services
        if (e.altKey && e.key === 's') {
            e.preventDefault();
            document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
        }
        
        // Alt + C: Go to contact
        if (e.altKey && e.key === 'c') {
            e.preventDefault();
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }
        
        // Alt + A: Go to about
        if (e.altKey && e.key === 'a') {
            e.preventDefault();
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

/**
 * Advanced hover effects for various elements
 */
function initAdvancedHoverEffects() {
    // Expertise items magnetic effect
    const expertiseItems = document.querySelectorAll('.expertise-item');
    expertiseItems.forEach(item => {
        item.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const deltaX = (x - centerX) / 10;
            const deltaY = (y - centerY) / 10;
            
            this.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.02)`;
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0) scale(1)';
        });
    });
    
    // Social links with enhanced effects
    const socialLinks = document.querySelectorAll('.social-link, .footer-social a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) rotate(5deg)';
            this.style.boxShadow = '0 5px 15px rgba(0, 212, 255, 0.3)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
            this.style.boxShadow = 'none';
        });
    });
}

/**
 * Performance monitoring
 */
function initPerformanceMonitoring() {
    // Monitor page load performance
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log(`%cPage loaded in ${Math.round(loadTime)}ms`, 'color: var(--accent-color); font-weight: bold;');
        
        // Log performance metrics
        if ('performance' in window && 'getEntriesByType' in performance) {
            const navigation = performance.getEntriesByType('navigation')[0];
            console.log('%cPerformance Metrics:', 'color: var(--primary-color); font-weight: bold;');
            console.log(`DOM Content Loaded: ${Math.round(navigation.domContentLoadedEventEnd)}ms`);
            console.log(`Load Complete: ${Math.round(navigation.loadEventEnd)}ms`);
        }
    });
    
    // Monitor scroll performance
    let scrollCount = 0;
    window.addEventListener('scroll', function() {
        scrollCount++;
        if (scrollCount % 100 === 0) {
            console.log(`Scroll events processed: ${scrollCount}`);
        }
    });
}

/**
 * Enhanced Navigation functionality
 */
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Enhanced scroll effect to navbar with throttling
    const handleScroll = throttle(function() {
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            navbar.classList.add('scrolled');
            navbar.style.background = 'rgba(5, 5, 5, 0.98)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
        
        // Update active link based on scroll position
        updateActiveNavLink();
    }, 16); // ~60fps
    
    window.addEventListener('scroll', handleScroll);
    
    // Active link highlighting with smooth transitions
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Add ripple effect
            createRippleEffect(this, e);
        });
        
        // Enhanced hover effects
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    const scrollY = window.scrollY + 100; // Offset for fixed navbar
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

/**
 * Create ripple effect on click
 */
function createRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(0, 212, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 1000;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple animation keyframes
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

/**
 * Smooth scrolling for navigation links
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
}

/**
 * Enhanced Service cards interactions and effects
 */
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach((card, index) => {
        // Enhanced hover effects with staggered animations
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateX(5deg)';
            this.style.boxShadow = '0 25px 50px rgba(0, 212, 255, 0.2)';
            
            // Animate service features on hover
            const features = this.querySelectorAll('.service-features li');
            features.forEach((feature, i) => {
                setTimeout(() => {
                    feature.style.transform = 'translateX(10px)';
                    feature.style.background = 'rgba(0, 212, 255, 0.05)';
                }, i * 50);
            });
            
            // Glow effect on title
            const title = this.querySelector('.service-title');
            if (title) {
                title.style.textShadow = '0 0 20px rgba(0, 212, 255, 0.8)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.4)';
            
            // Reset service features
            const features = this.querySelectorAll('.service-features li');
            features.forEach(feature => {
                feature.style.transform = 'translateX(0)';
                feature.style.background = 'transparent';
            });
            
            // Reset title glow
            const title = this.querySelector('.service-title');
            if (title) {
                title.style.textShadow = '0 0 10px rgba(0, 212, 255, 0.3)';
            }
        });
        
        // Enhanced click interaction with card expansion effect
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-15px) rotateX(5deg)';
            }, 150);
            
            // Create modal-like expansion effect
            expandServiceCard(this);
            
            console.log('Service card clicked:', this.querySelector('.service-title').textContent);
        });
        
        // Add parallax effect to service images
        const serviceImage = card.querySelector('.service-image img');
        if (serviceImage) {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                serviceImage.style.transform = `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            card.addEventListener('mouseleave', function() {
                serviceImage.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';
            });
        }
        
        // Staggered entrance animation
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

/**
 * Expand service card with detailed view
 */
function expandServiceCard(card) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'service-modal-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    // Create expanded card
    const expandedCard = card.cloneNode(true);
    expandedCard.className = 'service-card-expanded';
    expandedCard.style.cssText = `
        max-width: 800px;
        max-height: 90vh;
        overflow-y: auto;
        transform: scale(0.8);
        transition: transform 0.3s ease;
        border: 2px solid var(--primary-color);
        box-shadow: 0 25px 50px rgba(0, 212, 255, 0.3);
    `;
    
    // Add close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: 15px;
        right: 15px;
        background: var(--primary-color);
        color: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        z-index: 10001;
        transition: all 0.3s ease;
    `;
    
    closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        closeServiceModal(overlay);
    });
    
    closeBtn.addEventListener('mouseenter', function() {
        this.style.background = 'var(--hover-color)';
        this.style.transform = 'scale(1.1)';
    });
    
    closeBtn.addEventListener('mouseleave', function() {
        this.style.background = 'var(--primary-color)';
        this.style.transform = 'scale(1)';
    });
    
    expandedCard.appendChild(closeBtn);
    overlay.appendChild(expandedCard);
    document.body.appendChild(overlay);
    
    // Animate in
    setTimeout(() => {
        overlay.style.opacity = '1';
        expandedCard.style.transform = 'scale(1)';
    }, 10);
    
    // Close on overlay click
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeServiceModal(overlay);
        }
    });
    
    // Close on escape key
    const handleEscape = function(e) {
        if (e.key === 'Escape') {
            closeServiceModal(overlay);
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

/**
 * Close service modal
 */
function closeServiceModal(overlay) {
    const expandedCard = overlay.querySelector('.service-card-expanded');
    
    overlay.style.opacity = '0';
    expandedCard.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        document.body.removeChild(overlay);
    }, 300);
}

/**
 * Enhanced Scroll-based animations with multiple effects
 */
function initAnimations() {
    // Multiple intersection observers for different animation types
    const fadeUpObserver = createAnimationObserver('fade-in-up', 0.1);
    const fadeLeftObserver = createAnimationObserver('fade-in-left', 0.15);
    const fadeRightObserver = createAnimationObserver('fade-in-right', 0.15);
    const scaleObserver = createAnimationObserver('scale-in', 0.2);
    
    // Observe different elements with different animations
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        // Initially hide cards for animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        // Alternate animation directions
        if (index % 2 === 0) {
            fadeLeftObserver.observe(card);
        } else {
            fadeRightObserver.observe(card);
        }
    });
    
    // Expertise items with staggered animations
    const expertiseItems = document.querySelectorAll('.expertise-item');
    expertiseItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        setTimeout(() => {
            scaleObserver.observe(item);
        }, index * 100);
    });
    
    // Contact items with fade up
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        fadeUpObserver.observe(item);
    });
    
    // Section headers with slide down animation
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-30px)';
        createAnimationObserver('slide-in-down', 0.3).observe(header);
    });
    
    // Parallax effects for background elements
    initParallaxEffects();
    
    // Counter animation for hero stats
    animateCounters();
    
    // Initialize scroll progress indicator
    initScrollProgress();
}

/**
 * Create reusable animation observer
 */
function createAnimationObserver(animationClass, threshold = 0.1) {
    const observerOptions = {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px'
    };
    
    return new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'none';
                
                // Add staggered animation for child elements
                const children = entry.target.querySelectorAll('.service-features li, .expertise-item h4');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateX(0)';
                    }, index * 100);
                });
                
                this.unobserve(entry.target);
            }
        });
    }, observerOptions);
}

/**
 * Initialize parallax effects
 */
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero-background, .service-image img');
    
    const handleParallax = throttle(function() {
        const scrollY = window.scrollY;
        
        parallaxElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const speed = element.classList.contains('hero-background') ? 0.5 : 0.3;
            
            if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
                const yPos = -(scrollY * speed);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            }
        });
    }, 16);
    
    window.addEventListener('scroll', handleParallax);
}

/**
 * Initialize scroll progress indicator
 */
function initScrollProgress() {
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
        z-index: 10001;
        transition: width 0.1s ease;
        box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
    `;
    
    document.body.appendChild(progressBar);
    
    // Update progress on scroll
    const updateProgress = throttle(function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    }, 16);
    
    window.addEventListener('scroll', updateProgress);
}

/**
 * Animated counters for hero statistics
 */
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = counter.textContent;
        const numericTarget = parseFloat(target.replace(/[^\d.]/g, ''));
        const suffix = target.replace(/[\d.]/g, '');
        let current = 0;
        const increment = numericTarget / 100;
        const duration = 2000; // 2 seconds
        const stepTime = duration / 100;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericTarget) {
                current = numericTarget;
                clearInterval(timer);
            }
            
            if (suffix.includes('.')) {
                counter.textContent = current.toFixed(1) + suffix;
            } else {
                counter.textContent = Math.floor(current) + suffix;
            }
        }, stepTime);
    };
    
    // Trigger counter animation when hero section is visible
    const heroObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => animateCounter(counter));
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
}

/**
 * Enhanced Mobile menu functionality with advanced animations
 */
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    let isMenuOpen = false;
    
    if (navToggle && navMenu) {
        // Enhanced toggle functionality
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            isMenuOpen = !isMenuOpen;
            
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Enhanced hamburger animation
            const bars = this.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                if (isMenuOpen) {
                    if (index === 0) {
                        bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                        bar.style.background = 'var(--primary-color)';
                    }
                    if (index === 1) {
                        bar.style.opacity = '0';
                        bar.style.transform = 'scale(0)';
                    }
                    if (index === 2) {
                        bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                        bar.style.background = 'var(--primary-color)';
                    }
                } else {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                    bar.style.background = 'var(--text-light)';
                }
            });
            
            // Animate menu items with stagger
            if (isMenuOpen) {
                navLinks.forEach((link, index) => {
                    link.style.opacity = '0';
                    link.style.transform = 'translateX(-20px)';
                    setTimeout(() => {
                        link.style.opacity = '1';
                        link.style.transform = 'translateX(0)';
                    }, index * 100 + 200);
                });
            }
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
        });
        
        // Enhanced link click handling
        navLinks.forEach((link, index) => {
            link.addEventListener('click', function(e) {
                // Animate out before closing
                navLinks.forEach((l, i) => {
                    setTimeout(() => {
                        l.style.opacity = '0';
                        l.style.transform = 'translateX(20px)';
                    }, i * 50);
                });
                
                // Close menu after animation
                setTimeout(() => {
                    closeMobileMenu();
                }, navLinks.length * 50 + 200);
            });
            
            // Add hover effects for mobile menu items
            link.addEventListener('mouseenter', function() {
                this.style.background = 'rgba(0, 212, 255, 0.1)';
                this.style.transform = 'translateX(10px)';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.background = 'transparent';
                this.style.transform = 'translateX(0)';
            });
        });
        
        // Close menu on outside click
        document.addEventListener('click', function(e) {
            if (isMenuOpen && !navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMobileMenu();
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', debounce(function() {
            if (window.innerWidth > 768 && isMenuOpen) {
                closeMobileMenu();
            }
        }, 250));
    }
    
    function closeMobileMenu() {
        isMenuOpen = false;
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
            bar.style.background = 'var(--text-light)';
        });
    }
}

/**
 * Utility functions for future enhancements
 */

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Debounce function for resize events
function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Contact form handling (for future implementation)
 */
function initContactForm() {
    // Future: Add contact form validation and submission
    // This function is prepared for Step 4 enhancements
    console.log('Contact form functionality ready for implementation');
}

/**
 * Performance optimization
 */
function initPerformanceOptimizations() {
    // Lazy loading for images (modern browsers)
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.src;
        });
    } else {
        // Fallback for older browsers
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/lazysizes@5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
    
    // Preload critical resources
    const criticalImages = [
        'images/hero_industrial_control_room.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize performance optimizations
initPerformanceOptimizations();

/**
 * Error handling and logging
 */
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Future: Could send error reports to analytics
});

// Console welcome message
console.log('%cHertzInnovation Landing Page', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cPowering Industrial Excellence Through Advanced Automation', 'color: #b0b0b0; font-size: 14px;');
console.log('%cDeveloped with modern web technologies', 'color: #00ff88; font-size: 12px;');