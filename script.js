/**
 * NEUMAOPS INTEGRATED RUNTIME ENGINE — PORTFOLIO ENVIRONMENT
 * Handles Automated Layout Scrolling, Typing Subroutines, and Metric Meters
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. CHRONOS YEAR SYNCHRONIZATION
       ========================================================================== */
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    /* ==========================================================================
       2. REWRITTEN HIGH-ASSURANCE TYPING SIMULATOR
       ========================================================================== */
    const typingTextElement = document.getElementById("typing-text");
    const operationalProfiles = [
        "GRADUATE ICT PROFESSIONAL",
        "CYBERSECURITY DEVSECOPS ENGINEER",
        "FULL-STACK SECURE SYSTEM ARCHITECT",
        "FOUNDER & CEO, NEUMAOPS"
    ];

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
                setTimeout(executeTypingCycle, 1500); // Wait time at string boundary
                return;
            }
        } else {
            typingTextElement.textContent = stringPayload.slice(0, --characterIndex);
            if (characterIndex === 0) {
                isDeletingAction = false;
                profileIndex = (profileIndex + 1) % operationalProfiles.length;
            }
        }
        setTimeout(executeTypingCycle, isDeletingAction ? 50 : 80);
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
                        bar.style.width = targetMetricWidth;
                    }
                });
                // Unobserve section once filled to preserve background processes
                observer.unobserve(entry.target);
            }
        });
    };

    const skillSystemObserver = new IntersectionObserver(activateSkillBars, { threshold: 0.25 });
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
        upNavigationButton.innerHTML = "▲";

        const downNavigationButton = document.createElement("button");
        downNavigationButton.className = "scroll-btn down";
        downNavigationButton.setAttribute("aria-label", "Route to system terminal context");
        downNavigationButton.innerHTML = "▼";

        document.body.appendChild(upNavigationButton);
        document.body.appendChild(downNavigationButton);

        const internalHeroTarget = document.getElementById("hero");
        const internalContactTarget = document.getElementById("contact");

        // Action Trigger Routes
        upNavigationButton.addEventListener("click", () => {
            if (internalHeroTarget) {
                internalHeroTarget.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });

        downNavigationButton.addEventListener("click", () => {
            if (internalContactTarget) {
                internalContactTarget.scrollIntoView({ behavior: "smooth", block: "end" });
            } else {
                window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            }
        });

        // Dynamic Intersection Management via Passive Window Listeners
        const processVisibilityScrollMetrics = () => {
            const currentVerticalScroll = window.scrollY || window.pageYOffset;
            const currentViewportDimensions = window.innerHeight || document.documentElement.clientHeight;
            const totalSystemPayloadHeight = document.documentElement.scrollHeight;

            const isPastOriginThreshold = currentVerticalScroll > 250;
            const isBeforeTerminalThreshold = currentVerticalScroll + currentViewportDimensions < totalSystemPayloadHeight - 250;

            upNavigationButton.classList.toggle("visible", isPastOriginThreshold);
            downNavigationButton.classList.toggle("visible", isBeforeTerminalThreshold);
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
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            }
        });
    }, { threshold: 0.4, rootMargin: "-10% 0px -40% 0px" });

    executionTargetSections.forEach(section => {
        dynamicNavSectionObserver.observe(section);
    });
});
