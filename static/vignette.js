var featuredArticles = [
  // Vous devrez générer cette partie dans Hugo, ou bien passer les données d'une autre manière
];

function updateFeatured() {
  var chosenIndexes = [];
  while (chosenIndexes.length < 2) {
    var r = Math.floor(Math.random() * featuredArticles.length);
    if (chosenIndexes.indexOf(r) === -1) chosenIndexes.push(r);
  }

  for (var i = 0; i < chosenIndexes.length; i++) {
    var article = featuredArticles[chosenIndexes[i]];
    var vignette = document.getElementById('featured' + (i+1));
    vignette.innerHTML = '<a href="' + article.url + '"><img src="' + article.image + '" alt="' + article.title + '"><h2>' + article.title + '</h2></a>';
  }
}


// Initialisation au chargement de la page
window.onload = updateFeatured;

// Mise à jour toutes les six heures
setInterval(updateFeatured, 21600000);
