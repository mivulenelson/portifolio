// ========== TYPING EFFECT IN HERO ==========
const typingTextElement = document.getElementById("typing-text");
const roles = [
    "Graduate ICT Professional",
    "Cybersecurity Enthusiast",
    "Full-Stack Web Developer",
    "Founder & CEO, ElashTechnologies"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
    const currentRole = roles[roleIndex];
    if (!deleting) {
        typingTextElement.textContent = currentRole.slice(0, ++charIndex);
        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(type, 1300);
            return;
        }
    } else {
        typingTextElement.textContent = currentRole.slice(0, --charIndex);
        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    setTimeout(type, deleting ? 60 : 90);
}

// ========== INTERSECTION OBSERVER FOR SECTIONS ==========
const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    },
    {
        threshold: 0.18
    }
);

// ========== INTERSECTION OBSERVER FOR PROJECT CARDS ==========
const projectObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    },
    {
        threshold: 0.15
    }
);

// ========== SKILL BAR ANIMATION ==========
const skillObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll(".skill-bar span");
                bars.forEach((bar) => {
                    const width = bar.dataset.width;
                    bar.style.width = width;
                });
            }
        });
    },
    {
        threshold: 0.4
    }
);

// ========== NAV LINK HIGHLIGHTING ==========
const navLinks = document.querySelectorAll(".nav-link");
const sectionIds = ["hero", "about", "company", "skills", "projects", "contact"];

const navObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach((link) => {
                    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
                });
            }
        });
    },
    {
        threshold: 0.5
    }
);

// ========== SMOOTH SCROLL FOR NAV LINKS (extra control) ==========
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        if (targetId.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    });
});

// ========== FOOTER YEAR ==========
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// ========== INIT OBSERVERS & TYPING ON LOAD ==========
window.addEventListener("DOMContentLoaded", () => {
    // typing effect
    type();

    // observe sections
    document.querySelectorAll(".section").forEach((section) => {
        sectionObserver.observe(section);
        navObserver.observe(section);
    });

    // observe hero for nav highlighting
    const hero = document.getElementById("hero");
    if (hero) navObserver.observe(hero);

    // observe projects
    document.querySelectorAll(".project-card").forEach((card) => {
        projectObserver.observe(card);
    });

    // observe skill container for bars
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }
});
