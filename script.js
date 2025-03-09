// Smooth title animation
gsap.from(".title", { opacity: 0, y: -50, duration: 1.5, ease: "bounce.out" });

// Button click animation
document.querySelector(".cool-button").addEventListener("click", () => {
    gsap.to(".cool-button", { scale: 1.3, duration: 0.2, yoyo: true, repeat: 1 });
});


// Load ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate text when scrolling
gsap.to(".scroll-text", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".scroll-text",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

// Fade in box when scrolling
gsap.to(".animated-box", {
    opacity: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".animated-box",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progress = (scrollTop / scrollHeight) * 100;
    document.querySelector(".progress-bar").style.width = progress + "%";
});

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

galleryItems.forEach(item => {
    item.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = item.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD5rEUYP7eTJf8QJ30wu2GaIEz6bdNLKzE",
    authDomain: "mysite-bddac.firebaseapp.com",
    projectId: "mysite-bddac",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();

document.getElementById("login").addEventListener("click", () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => alert("Login Successful!"))
        .catch(error => alert("Error: " + error.message));
});

window.onload = function () {
    document.getElementById("login").addEventListener("click", function () {
        alert("Login button clicked!");
    });
};

const darkModeToggle = document.getElementById("dark-mode-toggle");

// Check if dark mode was previously enabled
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Toggle dark mode when button is clicked
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save the preference to localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

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
    document.body.classList.remove("red-mode"); // Remove Red Mode if active

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Toggle Red Mode
redModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("red-mode");
    document.body.classList.remove("dark-mode"); // Remove Dark Mode if active

    if (document.body.classList.contains("red-mode")) {
        localStorage.setItem("theme", "red");
    } else {
        localStorage.setItem("theme", "light");
    }
});

