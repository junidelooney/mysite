// Smooth title animation
gsap.from(".title", { opacity: 0, y: -50, duration: 1.5, ease: "bounce.out" });

// Button click animation
document.querySelector(".cool-button").addEventListener("click", () => {
    gsap.to(".cool-button", { scale: 1.3, duration: 0.2, yoyo: true, repeat: 1 });
});