
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navigationItems = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section[id]");
const currentYear = document.getElementById("currentYear");

// Mobile navigation menu
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after selecting a section
navigationItems.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        menuToggle.textContent = "☰";
    });
});

// Highlight the navigation link for the current section
function updateActiveLink() {
    let currentSection = "home";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 130;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }
    });

    navigationItems.forEach((link) => {
        const isActive =
            link.getAttribute("href") === `#${currentSection}`;

        link.classList.toggle("active", isActive);
    });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

// Automatically display the current year
currentYear.textContent = new Date().getFullYear();
