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
});/**
 * NEUMAOPS INTEGRATED RUNTIME ENGINE — PORTFOLIO ENVIRONMENT (script_2.js)
 * Handles Automated Layout Scrolling, Typing Subroutines, and Metric Meters
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. CHRONOS YEAR SYNCHRONIZATION
       ========================================================================== */
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear(); /*[cite: 16] */
    }

    /* ==========================================================================
       2. REWRITTEN HIGH-ASSURANCE TYPING SIMULATOR
       ========================================================================== */
    const typingTextElement = document.getElementById("typing-text");
    const operationalProfiles = [
        "Graduate ICT Professional",
        "Cybersecurity Enthusiast",
        "Full-Stack Web Developer",
        "Founder & CEO, NeumaOps"
    ]; /*[cite: 16] */

    let profileIndex = 0;
    let characterIndex = 0;
    let isDeletingAction = false;

    function executeTypingCycle() {
        if (!typingTextElement) return;
        
        const stringPayload = operationalProfiles[profileIndex];
        
        if (!isDeletingAction) {
            typingTextElement.textContent = stringPayload.slice(0, ++characterIndex);
            if (characterIndex === stringPayload.length) {
                isDeletingAction = true;
                setTimeout(executeTypingCycle, 1300); // Wait time at string boundary[cite: 16]
                return;
            }
        } else {
            typingTextElement.textContent = stringPayload.slice(0, --characterIndex);
            if (characterIndex === 0) {
                isDeletingAction = false;
                profileIndex = (profileIndex + 1) % operationalProfiles.length;
            }
        }
        setTimeout(executeTypingCycle, isDeletingAction ? 60 : 90); /*[cite: 16] */
    }
    executeTypingCycle();

    /* ==========================================================================
       3. SYSTEM SKILL-METER MAPPED INTERSECTION INGESTION
       ========================================================================== */
    const activateSkillBars = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const visualizationBars = entry.target.querySelectorAll(".skill-bar span");
                visualizationBars.forEach(bar => {
                    const targetMetricWidth = bar.getAttribute("data-width");
                    if (targetMetricWidth) {
                        bar.style.width = targetMetricWidth; /*[cite: 16] */
                    }
                });
                // Unobserve section once filled to preserve background processes
                observer.unobserve(entry.target);
            }
        });
    };

    const skillSystemObserver = new IntersectionObserver(activateSkillBars, { threshold: 0.4 }); /*[cite: 16] */
    const skillsTargetSection = document.getElementById("skills");
    if (skillsTargetSection) {
        skillSystemObserver.observe(skillsTargetSection);
    }

    /* ==========================================================================
       4. SYNCED DUAL-DIRECTION SCROLL CONTROLLER
       ========================================================================== */
    const generateScrollNavigationEngine = () => {
        const upNavigationButton = document.createElement("button");
        upNavigationButton.className = "scroll-btn up";
        upNavigationButton.setAttribute("aria-label", "Route to system origin context");
        upNavigationButton.innerHTML = "▲"; /*[cite: 16] */

        const downNavigationButton = document.createElement("button");
        downNavigationButton.className = "scroll-btn down";
        downNavigationButton.setAttribute("aria-label", "Route to system terminal context");
        downNavigationButton.innerHTML = "▼"; /*[cite: 16] */

        document.body.appendChild(upNavigationButton);
        document.body.appendChild(downNavigationButton);

        const internalHeroTarget = document.getElementById("hero");
        const internalContactTarget = document.getElementById("contact");

        // Action Trigger Routes
        upNavigationButton.addEventListener("click", () => {
            if (internalHeroTarget) {
                internalHeroTarget.scrollIntoView({ behavior: "smooth", block: "start" }); /*[cite: 16] */
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" }); /*[cite: 16] */
            }
        });

        downNavigationButton.addEventListener("click", () => {
            if (internalContactTarget) {
                internalContactTarget.scrollIntoView({ behavior: "smooth", block: "end" }); /*[cite: 16] */
            } else {
                window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); /*[cite: 16] */
            }
        });

        // Dynamic Intersection Management via Passive Window Listeners
        const processVisibilityScrollMetrics = () => {
            const currentVerticalScroll = window.scrollY || window.pageYOffset;
            const currentViewportDimensions = window.innerHeight || document.documentElement.clientHeight;
            const totalSystemPayloadHeight = document.documentElement.scrollHeight;

            const isPastOriginThreshold = currentVerticalScroll > 200; /*[cite: 16] */
            const isBeforeTerminalThreshold = currentVerticalScroll + currentViewportDimensions < totalSystemPayloadHeight - 200; /*[cite: 16] */

            upNavigationButton.classList.toggle("visible", isPastOriginThreshold); /*[cite: 16] */
            downNavigationButton.classList.toggle("visible", isBeforeTerminalThreshold); /*[cite: 16] */
        };

        window.addEventListener('scroll', processVisibilityScrollMetrics, { passive: true });
        processVisibilityScrollMetrics();
    };
    
    generateScrollNavigationEngine();

    /* ==========================================================================
       5. REAL-TIME NAVLINK ELEMENT OBSERVER
       ========================================================================== */
    const executionNavLinks = document.querySelectorAll(".nav-link");
    const executionTargetSections = document.querySelectorAll("section[id]");

    const dynamicNavSectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const visibleActiveSectionId = entry.target.getAttribute("id");
                executionNavLinks.forEach(link => {
                    const linkTargetHref = link.getAttribute("href");
                    if (linkTargetHref === `#${visibleActiveSectionId}`) {
                        link.classList.add("active"); /*[cite: 16] */
                    } else {
                        link.classList.remove("active");
                    }
                });
            }
        });
    }, { threshold: 0.5 }); /*[cite: 16] */

    executionTargetSections.forEach(section => {
        dynamicNavSectionObserver.observe(section);
    });
});
