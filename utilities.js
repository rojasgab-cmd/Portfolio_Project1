/* AI Prompt Used: Use javascript and css to create a toggleable dark mode for the website. 
Create a toggle switch or button to activate dark mode. 
Use the dark mode palette in the css file. 
Do not greatly alter the layout of the website. */

const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
});

function initSectionScrollAnimations() {
    const sections = document.querySelectorAll("#about, #projects, #contact");

    if (sections.length === 0) {
        return;
    }

    if (typeof ScrollMagic === "undefined") {
        console.error("ScrollMagic did not load; section scroll animations are unavailable.");
        return;
    }

    const controller = new ScrollMagic.Controller();
    sections.forEach((section) => {
        section.classList.add("scroll-reveal");

        new ScrollMagic.Scene({
            triggerElement: section,
            triggerHook: 0.8
        })
            .setClassToggle(section, "is-visible")
            .addTo(controller);
    });
}

initSectionScrollAnimations();
