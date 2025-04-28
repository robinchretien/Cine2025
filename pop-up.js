// Fonction pour ouvrir la pop-up avec les détails du film
function openFilmDetails(film) {
    // Création de l'élément pop-up
    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'popup-overlay';
    
    const popupContainer = document.createElement('div');
    popupContainer.className = 'popup-container';
    
    const filmTitle = film["Titre du film"];
    
    // Récupérer les informations du film depuis la base de données
    const filmInfo = getFilmInfo(filmTitle);
    
    // Formatter le titre pour le nom de fichier (remplacer les caractères spéciaux par des tirets)
    let formattedTitle = filmTitle
        .replace(/[:*…]/g, "-") // Remplacer : * et points de suspension unicode
        .replace(/\.\.\./g, "-"); // Remplacer les points de suspension classiques
    
    // Cas spéciaux pour certains films
    const specialCases = {
        "Souviens toi": "Souviens-toi-l-ete-dernier",
        "Conjuring : L'heure du jugement": "Conjuring-L-heure-du-jugement"
    };
    
    // Vérifier si le titre est dans la liste des cas spéciaux
    for (const key in specialCases) {
        if (filmTitle.includes(key)) {
            formattedTitle = specialCases[key];
            break;
        }
    }
    
    const encodedTitle = encodeURIComponent(formattedTitle);
    
    // Pour le débogage
    console.log("Titre original:", filmTitle);
    console.log("Titre formaté:", formattedTitle);
    console.log("Titre encodé:", encodedTitle);
    
    // Préparer le bouton de bande-annonce s'il y a une URL
    let trailerButton = '';
    if (filmInfo.bandeAnnonce && filmInfo.bandeAnnonce.trim() !== '') {
        trailerButton = `
            <div class="trailer-button-container">
                <a href="${filmInfo.bandeAnnonce}" target="_blank" class="trailer-button">
                    Bande Annonce
                </a>
            </div>
        `;
    }
    
    // Contenu de la pop-up
    popupContainer.innerHTML = `
        <div class="popup-close">&times;</div>
        <div class="popup-content">
            <div class="popup-info">
                <h2>${filmTitle}</h2>
                <p><strong>Date de sortie :</strong> ${film.Jour} ${film.Mois}</p>
                <p><strong>Thème :</strong> ${filmInfo.theme}</p>
                <p><strong>Réalisateur :</strong> ${filmInfo.realisateur}</p>
                <p><strong>Acteurs principaux :</strong> ${filmInfo.acteurs}</p>
                <p><strong>Synopsis :</strong> ${filmInfo.synopsis}</p>
                ${trailerButton}
            </div>
            <div class="popup-image" id="popup-image-container">
                <!-- L'image sera insérée ici par JavaScript -->
            </div>
        </div>
    `;
    
    // Ajouter le popup au document
    popupOverlay.appendChild(popupContainer);
    document.body.appendChild(popupOverlay);
    
    // Empêcher le défilement du body
    document.body.style.overflow = 'hidden';
    
    // Animation d'entrée
    setTimeout(() => {
        popupOverlay.classList.add('active');
        popupContainer.classList.add('active');
    }, 10);
    
    // Gestion plus robuste du chargement des images
    loadImageWithFallbacks(encodedTitle, filmTitle);
    
    // Fermeture du popup au clic sur le bouton de fermeture
    const closeButton = popupContainer.querySelector('.popup-close');
    closeButton.addEventListener('click', closePopup);
    
    // Fermeture du popup au clic en dehors du contenu
    popupOverlay.addEventListener('click', function(e) {
        if (e.target === popupOverlay) {
            closePopup();
        }
    });
    
    // Fermeture du popup avec la touche Echap
    document.addEventListener('keydown', handleEscapeKey);
}

// Fonction pour charger une image avec fallbacks
function loadImageWithFallbacks(encodedTitle, originalTitle) {
    const imageContainer = document.getElementById('popup-image-container');
    const formats = ['jpg', 'png', 'webp'];
    let currentFormatIndex = 0;
    
    // Créer un élément image
    const img = document.createElement('img');
    img.alt = `Affiche de ${originalTitle}`;
    
    // Fonction pour essayer le format suivant ou afficher l'image par défaut
    function tryNextFormat() {
        if (currentFormatIndex < formats.length) {
            const format = formats[currentFormatIndex];
            img.src = `./affiches/${encodedTitle}.${format}`;
            console.log(`Tentative de chargement: ${img.src}`);
            currentFormatIndex++;
        } else {
            // Si tous les formats ont échoué, utiliser l'image par défaut
            img.src = './affiches/default.webp';
            console.log("Utilisation de l'image par défaut");
        }
    }
    
    // Gestionnaire d'erreur
    img.onerror = tryNextFormat;
    
    // Démarrer avec le premier format
    tryNextFormat();
    
    // Ajouter l'image au conteneur
    imageContainer.appendChild(img);
}

// Fonction pour fermer la pop-up
function closePopup() {
    const popupOverlay = document.querySelector('.popup-overlay');
    const popupContainer = document.querySelector('.popup-container');
    
    if (popupOverlay && popupContainer) {
        // Animation de sortie
        popupOverlay.classList.remove('active');
        popupContainer.classList.remove('active');
        
        // Supprimer l'élément après l'animation
        setTimeout(() => {
            document.body.removeChild(popupOverlay);
            document.body.style.overflow = 'auto'; // Restaurer le défilement
        }, 300);
        
        // Retirer l'écouteur d'événement pour la touche Echap
        document.removeEventListener('keydown', handleEscapeKey);
    }
}

// Fonction pour gérer la fermeture avec la touche Echap
function handleEscapeKey(e) {
    if (e.key === 'Escape') {
        closePopup();
    }
}

// Initialiser les événements de clic sur les lignes du tableau
function initializeTableRowClicks() {
    const table = document.getElementById('table');
    
    // Délégation d'événement pour capturer les clics sur les lignes du tableau
    table.addEventListener('click', function(e) {
        // Remonter jusqu'à la ligne du tableau la plus proche
        let target = e.target;
        while (target && target !== this && target.tagName !== 'TR') {
            target = target.parentNode;
        }
        
        // Si on a cliqué sur une ligne (pas l'en-tête)
        if (target && target.tagName === 'TR' && !target.querySelector('th')) {
            // Trouver les cellules de la ligne
            const cells = target.querySelectorAll('td');
            if (cells.length >= 3) {
                // Récupérer les informations du film à partir des cellules
                const filmInfo = {
                    "Jour": cells[0].textContent,
                    "Mois": cells[1].textContent,
                    "Titre du film": cells[2].textContent
                };
                
                // Ouvrir la pop-up avec les informations du film
                openFilmDetails(filmInfo);
            }
        }
    });
}

// Initialiser lorsque le contenu du DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser les clics sur les lignes du tableau
    initializeTableRowClicks();
});