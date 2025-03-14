// Fonction pour ouvrir la pop-up avec les détails du film
function openFilmDetails(film) {
    // Création de l'élément pop-up
    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'popup-overlay';
    
    const popupContainer = document.createElement('div');
    popupContainer.className = 'popup-container';
    
    // Contenu de la pop-up
    popupContainer.innerHTML = `
        <div class="popup-close">&times;</div>
        <div class="popup-content">
            <div class="popup-info">
                <h2>${film["Titre du film"]}</h2>
                <p><strong>Date de sortie :</strong> ${film.Jour} ${film.Mois}</p>
                <p><strong>Thème :</strong> test</p>
                <p><strong>Réalisateur :</strong> test</p>
                <p><strong>Acteurs principaux :</strong> test</p>
                <p><strong>Synopsis :</strong> test</p>
            </div>
            <div class="popup-image">
                <img src="./affiches/${encodeURIComponent(film["Titre du film"])}.jpg" 
                     alt="Affiche de ${film["Titre du film"]}"
                     onerror="this.src='./affiches/default.jpg';">
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