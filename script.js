const customCursor = document.getElementById("magicCursor");
const blueBall = document.getElementById("blueBall");
const sparkles = document.getElementById("sparkles");


document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById("background-audio");
    audio.volume = 0.5; // ajustez la valeur entre 0 et 1 pour modifier le volume

    function playAudio() {
        audio.muted = false;
        audio.play().catch(function(error) {
            console.error('Erreur lors de la lecture de l\'audio:', error);
        });
    }

    // Tente de lancer l'audio lors du chargement de la page
    playAudio();

    // Tente de lancer l'audio lors du premier clic de l'utilisateur
    document.addEventListener('click', function() {
        playAudio();
    });

    // Tente de lancer l'audio lorsque l'utilisateur fait défiler la page
    document.addEventListener('scroll', function() {
        playAudio();
    });
});


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
document.addEventListener("mousemove", showCursor)

// Cachez le curseur par défaut
document.body.style.cursor = "none";

const text = new SplitType('.text')

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .05,
})

setTimeout(function(){
    document.getElementById('section').scrollIntoView({behavior: "smooth"});
}, 1200);

const presentation = new SplitType('.presentation')

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 1,
    duration: 0.01,
})




