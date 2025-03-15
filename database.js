// Base de données des films avec informations détaillées
const filmDatabase = {
    // Structure : Clé = Titre exact du film, Valeur = Objet avec les détails
    "L'amour au présent": {
        theme: "Romance",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Wolfman": {
        theme: "Horreur",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Vol à haut risque": {
        theme: "Action",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Un parfait inconnu": {
        theme: "Thriller",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Captain America : Brave New World": {
        theme: "Super-héros",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "The Monkey": {
        theme: "Horreur",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Mickey 17": {
        theme: "Science-fiction",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "The Electric State": {
        theme: "Science-fiction",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Blanche-Neige": {
        theme: "Fantastique",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Novocaïne": {
        theme: "Thriller",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Minecraft : Le film": {
        theme: "Animation",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Sinners": {
        theme: "Drame",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Ravage": {
        theme: "Action",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Thunderbolts*": {
        theme: "Super-héros",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Destination Finale : Bloodlines": {
        theme: "Horreur",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Mission Impossible : The Final Reckoning": {
        theme: "Action",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Lilo & Stitch": {
        theme: "Animation",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Karate Kid: Legends": {
        theme: "Action",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Ballerina": {
        theme: "Action",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Dragons": {
        theme: "Animation",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "28 ans plus tard": {
        theme: "Horreur",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Elio": {
        theme: "Animation",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "F1": {
        theme: "Sport",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "M3GAN 2.0": {
        theme: "Horreur",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Jurassic World : Renaissance": {
        theme: "Aventure",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Superman": {
        theme: "Super-héros",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Les Schtroumpfs - Le film": {
        theme: "Animation",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Souviens toi… l'été dernier": {
        theme: "Horreur",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Les 4 Fantastiques : Premier pas": {
        theme: "Super-héros",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "One Battle After Another": {
        theme: "Action",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Conjuring : L'heure du jugement": {
        theme: "Horreur",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "The Bride !": {
        theme: "Horreur",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Michael": {
        theme: "Biopic",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Saw XI": {
        theme: "Horreur",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Tron : Ares": {
        theme: "Science-fiction",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Kaamelott - Deuxième volet": {
        theme: "Comédie",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Predator : Badlands": {
        theme: "Science-fiction",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Insaisissables 3": {
        theme: "Thriller",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "The Running Man": {
        theme: "Science-fiction",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Wicked : For Good": {
        theme: "Musical",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Zootopie 2": {
        theme: "Animation",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Frankenstein": {
        theme: "Horreur",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Five Nights at Freddy's 2": {
        theme: "Horreur",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Avatar : Fire and Ash": {
        theme: "Science-fiction",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Horizon : Chapitre 2": {
        theme: "Western",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    },
    "Bob l'éponge": {
        theme: "Animation",
        realisateur: "À compléter",
        acteurs: "À compléter",
        synopsis: "À compléter"
    }
};

// Fonction pour récupérer les informations d'un film
function getFilmInfo(filmTitle) {
    // Vérifier si le film existe dans la base de données
    if (filmDatabase[filmTitle]) {
        return filmDatabase[filmTitle];
    }    
    
    // Si le film n'est pas trouvé directement, essayer de le trouver par correspondance partielle
    for (const title in filmDatabase) {
        if (title.includes(filmTitle) || filmTitle.includes(title)) {
            return filmDatabase[title];
        }
    }
    
    // Si aucune correspondance n'est trouvée, retourner des informations par défaut
    return {
        theme: "Information non disponible",
        realisateur: "Information non disponible",
        acteurs: "Information non disponible",
        synopsis: "Information non disponible"
    };
}
