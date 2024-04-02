document.addEventListener("click", function(event) {
  // Vérifie si le clic est sur un lien
  var target = event.target.closest("a");
  if (!target) return;

  var href = target.getAttribute("href");
  
  // Vérifiez si le lien est interne
  if (href && href.startsWith("/")) {
    event.preventDefault(); // Empêche la navigation par défaut
    window.location.href = href; // Change la location, reste dans la web app
  } else if (href && (href.startsWith("http://") || href.startsWith("https://"))) {
    // Vérifie si le lien est externe et doit s'ouvrir dans Safari
    event.preventDefault(); // Empêche la navigation par défaut
    window.open(href, '_blank'); // Ouvre le lien externe dans un nouvel onglet
  }
  // Pas besoin de gérer spécifiquement les liens externes qui ne commencent pas par http ou https,
  // car ils ne sont pas courants pour des liens externes.
});
