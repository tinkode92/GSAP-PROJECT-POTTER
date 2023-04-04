const customCursor = document.getElementById("magicCursor");
const blueBall = document.getElementById("blueBall");
const sparkles = document.getElementById("sparkles");

function moveCursor(e) {
    gsap.to(customCursor, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out"
    });
}

function showCursor() {
    gsap.to(customCursor, {
        duration: 0.3,
        opacity: 1,
        ease: "power2.out"
    });

    gsap.to(sparkles, {
        duration: 0.6,
        opacity: 1,
        scale: 1.5,
        ease: "power2.out",
        repeat: -1,
        yoyo: true
    });
}

function hideCursor() {
    gsap.to(customCursor, {
        duration: 0.3,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.to(sparkles, {
        duration: 0.3,
        opacity: 0,
        scale: 1,
        ease: "power2.out"
    });
}

// Événements pour gérer l'apparition, la disparition et le mouvement du curseur personnalisé
document.addEventListener("mousemove", moveCursor);
document.addEventListener("mouseleave", hideCursor);

// Cachez le curseur par défaut
document.body.style.cursor = "none";

