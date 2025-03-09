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