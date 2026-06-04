/**
 * ==========================================================================
 * NEUMAOPS UNIFIED INTERACTION REGISTRY ENGINE - (script.js)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    /* =========================
       1. Core Temporal Year Sync
    ========================== */
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    /* =========================
       2. Dynamic Text Matrix Typist
    ========================== */
    const typingTextElement = document.getElementById("typing-text");
    const roles = [
        "Graduate ICT Systems Engineer",
        "Cybersecurity Operations Specialist",
        "Full-Stack Software Architect",
        "Founder & CEO, NeumaOps Solutions"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {
        if (!typingTextElement) return;
        const currentRole = roles[roleIndex];
        
        if (!deleting) {
            typingTextElement.textContent = currentRole.slice(0, ++charIndex);
            if (charIndex === currentRole.length) {
                deleting = true;
                setTimeout(type, 1800); // Wait state on string complete
                return;
            }
        } else {
            typingTextElement.textContent = currentRole.slice(0, --charIndex);
            if (charIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }
        setTimeout(type, deleting ? 40 : 80);
    }
    type();

    /* =========================
       3. Intersection Reveal Observers
    ========================== */
    const elementRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.filter = 'blur(0)';
                }, idx * 50); // Progressive cascade render delays
                elementRevealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.06 });

    // Query targeting structures
    const targets = document.querySelectorAll('.section, .card, .hero-content > *');
    targets.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(16px)';
        el.style.filter = 'blur(2px)';
        el.style.transition = 'opacity 0.7s cubic-bezier(0.25, 1, 0.5, 1), transform 0.7s cubic-bezier(0.25, 1, 0.5, 1), filter 0.7s cubic-bezier(0.25, 1, 0.5, 1)';
        elementRevealObserver.observe(el);
    });

    /* =========================
       4. Metric Skill-Bar Fluid Ingestion 
    ========================== */
    const skillSection = document.getElementById('skills');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-bar span');
                progressBars.forEach(bar => {
                    const explicitMetric = bar.getAttribute('data-width');
                    if (explicitMetric) bar.style.width = explicitMetric;
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    if (skillSection) skillObserver.observe(skillSection);

    /* =========================
       5. Segment Routing Highlights
    ========================== */
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    const routeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${targetId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(section => routeObserver.observe(section));

    /* =========================
       6. High-Performance Navigation Engine
    ========================== */
    const initScrollTopEngine = () => {
        const scrollBtn = document.createElement('button');
        scrollBtn.className = 'scroll-top-btn';
        scrollBtn.setAttribute('aria-label', 'Scroll safely to top section');
        scrollBtn.innerHTML = '▲';
        document.body.appendChild(scrollBtn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollBtn.classList.add('is-visible');
            } else {
                scrollBtn.classList.remove('is-visible');
            }
        }, { passive: true });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };
    initScrollTopEngine();
});
