  // Sélectionnez les éléments à animer
  const poudlard = document.getElementById("poudlard");

  // Créez une timeline GSAP
  const tl = gsap.timeline();

  // Ajoutez des animations à la timeline
  tl.from(poudlard, {duration: 1, scale: 0, opacity: 0})
    .to(poudlard, {duration: 1, opacity: 1, delay: 1})
    .to(poudlard, {duration: 1, scale: 1.2, ease: "power2.inOut", yoyo: true, repeat: 1, delay: 1})
    .to(poudlard, {duration: 1, opacity: 0, delay: 1, onComplete: () => {
        // Redirigez vers une autre page ou lancez la prochaine animation/interaction
        window.location.href = "chemin_vers_votre_prochaine_page.html";
    }})

  // Ajoutez ceci après la déclaration de votre timeline GSAP
  const customCursor = document.getElementById("baguette");

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
  }

  function hideCursor() {
      gsap.to(customCursor, {
          duration: 0.3,
          opacity: 0,
          ease: "power2.out"
      });
  }

  // Événements pour gérer l'apparition, la disparition et le mouvement du curseur personnalisé
  document.addEventListener("mousemove", moveCursor);
  document.addEventListener("mouseenter", showCursor);
  document.addEventListener("mouseleave", hideCursor);

  // Cachez le curseur par défaut
  document.body.style.cursor = "none";

    