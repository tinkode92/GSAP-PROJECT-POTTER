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
    