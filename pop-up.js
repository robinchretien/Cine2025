// Fonction pour initialiser les clics sur les lignes du tableau
function initializeTableRowClicks() {
    // Sélectionner toutes les lignes du tableau (sauf l'en-tête)
    const tableRows = document.querySelectorAll('#table tr:not(:first-child)');
    
    // Ajouter un écouteur d'événement à chaque ligne
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            // Récupérer le titre du film depuis la cellule appropriée
            const cells = this.querySelectorAll('td');
            if (cells.length >= 3) { // S'assurer qu'il y a au moins 3 cellules (Jour, Mois, Titre)
                const movieTitle = cells[2].textContent.trim(); // Le titre est dans la 3ème cellule (index 2)
                
                // Afficher les détails du film
                showMovieDetails(movieTitle);
            }
        });
    });
}

// Fonction pour afficher les détails du film dans une pop-up
function showMovieDetails(movieTitle) {
    console.log("Affichage des détails pour le film:", movieTitle);
    
    // Récupérer les informations du film
    let filmInfo;
    let isUserFilm = false;
    
    // D'abord, vérifier dans les films ajoutés par l'utilisateur
    const userFilms = JSON.parse(localStorage.getItem("userFilms")) || [];
    const userFilm = userFilms.find(film => film["Titre du film"] === movieTitle);
    
    if (userFilm) {
        // C'est un film ajouté par l'utilisateur, utiliser ses données
        isUserFilm = true;
        filmInfo = {
            theme: userFilm.theme || "Information non disponible",
            realisateur: userFilm.realisateur || "Information non disponible",
            acteurs: userFilm.acteurs || "Information non disponible", 
            synopsis: userFilm.synopsis || "Information non disponible",
            bandeAnnonce: userFilm.bandeAnnonce || "",
            urlaffiche: userFilm.urlaffiche || ""
        };
        console.log("Film utilisateur trouvé:", userFilm);
    } else {
        // Sinon, utiliser la fonction getFilmInfo du fichier database.js
        if (typeof getFilmInfo === 'function') {
            filmInfo = getFilmInfo(movieTitle);
            console.log("Informations obtenues depuis la base de données:", filmInfo);
        } else {
            // Fallback si la fonction n'est pas disponible
            console.warn("Fonction getFilmInfo non disponible");
            filmInfo = {
                theme: "Information non disponible",
                realisateur: "Information non disponible",
                acteurs: "Information non disponible",
                synopsis: "Information non disponible",
                bandeAnnonce: "",
                urlaffiche: ""
            };
        }
    }
    
    // Créer ou réutiliser la pop-up
    let popup = document.getElementById('moviePopup');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'moviePopup';
        popup.className = 'movie-popup';
        document.body.appendChild(popup);
    }
    
    // Déterminer l'URL de l'affiche
    let afficheUrl = '';
    
    if (isUserFilm && filmInfo.urlaffiche) {
        // Utiliser l'URL de l'affiche fournie par l'utilisateur
        afficheUrl = filmInfo.urlaffiche;
        console.log("Utilisation de l'URL d'affiche utilisateur:", afficheUrl);
    } else {
        // Essayer de trouver l'affiche dans le dossier des affiches
        // Convertir le titre pour en faire un nom de fichier valide
        const filename = movieTitle.toLowerCase()
            .replace(/[^\w\s]/gi, '') // Supprimer les caractères spéciaux
            .replace(/\s+/g, '_')     // Remplacer les espaces par des underscores
            + '.jpg';
        afficheUrl = `./affiches/${filename}`;
        console.log("Utilisation de l'affiche locale:", afficheUrl);
    }
    
    // Créer le contenu HTML de la pop-up
    let bandeAnnonceHTML = '';
    if (filmInfo.bandeAnnonce) {
        bandeAnnonceHTML = `
            <div class="movie-trailer">
                <a href="${filmInfo.bandeAnnonce}" target="_blank" class="trailer-button">
                    Voir la bande-annonce
                </a>
            </div>
        `;
    }
    
    // Remplir la pop-up
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close-button">&times;</span>
            <div class="movie-details">
                <div class="movie-poster">
                    <img src="${afficheUrl}" alt="Affiche de ${movieTitle}" onerror="this.src='./affiches/placeholder.jpg'">
                </div>
                <div class="movie-info">
                    <h2>${movieTitle}</h2>
                    <div class="info-section">
                        <h3>Thème</h3>
                        <p>${filmInfo.theme}</p>
                    </div>
                    <div class="info-section">
                        <h3>Réalisateur</h3>
                        <p>${filmInfo.realisateur}</p>
                    </div>
                    <div class="info-section">
                        <h3>Acteurs</h3>
                        <p>${filmInfo.acteurs}</p>
                    </div>
                    <div class="info-section">
                        <h3>Synopsis</h3>
                        <p>${filmInfo.synopsis}</p>
                    </div>
                    ${bandeAnnonceHTML}
                </div>
            </div>
        </div>
    `;
    
    // Afficher la pop-up
    popup.style.display = 'block';
    
    // Ajouter l'écouteur pour fermer la pop-up
    const closeButton = popup.querySelector('.close-button');
    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
    
    // Fermer la pop-up si on clique en dehors du contenu
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
}

// Initialiser les clics sur les lignes du tableau au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    initializeTableRowClicks();
    
    // Réinitialiser les événements après chaque recherche
    const searchElement = document.getElementById("search");
    if (searchElement) {
        searchElement.addEventListener('keyup', function() {
            // Attendre un peu pour que le tableau soit mis à jour
            setTimeout(initializeTableRowClicks, 600);
        });
    }
});