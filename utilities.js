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

function initProjectScrollAnimation() {
    const projects = document.querySelector("#projects");

    if (!projects) {
        return;
    }

    if (typeof ScrollMagic === "undefined") {
        console.error("ScrollMagic did not load; project scroll animation is unavailable.");
        return;
    }

    projects.classList.add("scroll-reveal");

    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: projects,
        triggerHook: 0.8
    })
        .setClassToggle(projects, "is-visible")
        .addTo(controller);
}

initProjectScrollAnimation();
