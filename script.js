const darkModeToggle = document.getElementById("dark-mode-toggle");
const redModeToggle = document.getElementById("red-mode-toggle");

// Check saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
} else if (savedTheme === "red") {
    document.body.classList.add("red-mode");
}

// Toggle Dark Mode
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.remove("red-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Toggle Red Mode
redModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("red-mode");
    document.body.classList.remove("dark-mode");

    if (document.body.classList.contains("red-mode")) {
        localStorage.setItem("theme", "red");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// GSAP Animations
gsap.to(".title", { opacity: 1, y: 0, duration: 1.5 });

document.getElementById("get-started-btn").addEventListener("click", () => {
    document.querySelector(".gallery").scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    document.querySelector(".hero").style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

gsap.from(".gallery", { opacity: 0, y: 100, duration: 1, scrollTrigger: ".gallery" });
