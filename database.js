// Base de données des films avec informations détaillées
const filmDatabase = {
    // Structure : Clé = Titre exact du film, Valeur = Objet avec les détails
    "L'amour au présent": {
        theme: "Comédie dramatique, Drame, Romance",
        realisateur: "John Crowley",
        acteurs: "Andrew Garfield, Florence Pugh, Aoife Hinds",
        synopsis: "Almut et Tobias voient leur vie à jamais bouleversée lorsqu'une rencontre accidentelle les réunit. Une romance profondément émouvante sur les instants qui nous changent, et ceux qui nous construisent.",
        bandeAnnonce: "https://youtu.be/O7XUGfDrQrA?si=4B3Sco1Dxgrh4mCB"
    },
    "Wolfman": {
        theme: "Epouvante-horreur, Thriller",
        realisateur: "Leigh Whannell",
        acteurs: "Christopher Abbott, Julia Garner, Matilda Firth",
        synopsis: "Après un évènement traumatisant, Blake quitte San Francisco pour retourner au fin fond de son Oregon natal et vivre dans sa maison d'enfance. C'est l'occasion pour lui de faire une pause loin de la ville et de tenter de sauver son mariage avec son épouse Charlotte en passant quelques jours dans la propriété avec leur fille, Ginger. À la nuit tombée alors que la famille arrive enfin à la ferme, ils sont attaqués par un animal invisible et, dans une fuite effrénée, se barricadent à l'intérieur de la maison pour se protéger de la créature qui rôde dans le périmètre, aux aguets. Mais à mesure que la nuit avance, Blake commence à se comporter de manière étrange...",
        bandeAnnonce: "https://youtu.be/r1Fnit-TosQ?si=pEciteCW6Yw77u7M"
    },
    "Vol à haut risque": {
        theme: "Action",
        realisateur: "Mel Gibson",
        acteurs: "Mark Wahlberg, Michelle Dockery, Topher Grace",
        synopsis: "L'US Marshals Madelyn Harris est chargée d'escorter Winston, criminel et informateur, qui va témoigner contre un parrain de la mafia. Pendant leur voyage en avion, elle se méfie rapidement du pilote, Daryl Booth, qui ne semble pas être l'homme qu'il prétend...",
        bandeAnnonce: "https://youtu.be/GUtUn2rL3Nw?si=1uSt6zkIkBWQ52Ic"
    },
    "Un parfait inconnu": {
        theme: "Biopic, Drame, Musical",
        realisateur: "James Mangold",
        acteurs: "Timothée Chalamet, Edward Norton, Elle Fanning",
        synopsis: "New York, 1961. Alors que la scène musicale est en pleine effervescence et que la société est en proie à des bouleversements culturels, un énigmatique jeune homme de 19 ans débarque du Minnesota avec sa guitare et son talent hors normes qui changeront à jamais le cours de la musique américaine. Durant son ascension fulgurante, il noue d'intimes relations avec des musiciens légendaires de Greenwich Village, avec en point d'orgue une performance révolutionnaire et controversée qui créera une onde de choc dans le monde entier…",
        bandeAnnonce: "https://youtu.be/3tONPZ6LCW0?si=Jq_v2OA3le6rJSds"
    },
    "Captain America : Brave New World": {
        theme: "Action, Aventure, Fantastique",
        realisateur: "Julius Onah",
        acteurs: "Malcolm Spellman, Dalan Musson",
        synopsis: "Peu après avoir fait la connaissance du nouveau président des Etats-Unis Thaddeus Ross, Sam Wilson se retrouve plongé au coeur d'un gigantesque incident international. Dans une lutte acharnée contre la montre, il se retrouve contraint de découvrir la raison de cet infâme complot avant que le véritable cerveau de l'opération ne mette bientôt le monde entier à feu et à sang…",
        bandeAnnonce: "https://youtu.be/hgX152xFTk8?si=XuEY2VAdQ5ElOSUU"
    },
    "The Monkey": {
        theme: "Comédie, Epouvante-horreur",
        realisateur: "Osgood Perkins",
        acteurs: "Theo James, Elijah Wood, Tatiana Maslany",
        synopsis: "Lorsque Bill et Hal, des jumeaux, trouvent dans le grenier un vieux jouet ayant appartenu à leur père, une série de morts atroces commence à se produire autour d'eux...",
        bandeAnnonce: "https://youtu.be/vMEDKmma49g?si=FzeUNF4ixIjoomqm"
    },
    "Mickey 17": {
        theme: "Action, Comédie, Science Fiction",
        realisateur: "Bong Joon Ho",
        acteurs: "Robert Pattinson, Naomi Ackie, Steven Yeun",
        synopsis: "Héros malgré lui, Mickey Barnes se tue à la tâche… littéralement ! Car c'est ce qu'exige de lui son entreprise : mourir régulièrement pour gagner sa vie.",
        bandeAnnonce: "https://youtu.be/r1iDBccf6rE?si=cDeYkJW0DLeYPBKQ"
    },
    "The Electric State": {
        theme: "Aventure, Science Fiction",
        realisateur: "Joe Russo, Anthony Russo",
        acteurs: "Millie Bobby Brown, Chris Pratt, Anthony Mackie",
        synopsis: "Une adolescente réalise que son nouvel ami robot, doux mais étrange, lui a en fait été envoyé par son frère disparu. Elle et le robot partent à la recherche du garçon, découvrant ainsi une vaste conspiration...",
        bandeAnnonce: "https://youtu.be/qckMgUok64w?si=CQl2LKH4bGi6SSbP"
    },
    "Blanche-Neige": {
        theme: "Aventure, Fantastique, Comédie musicale",
        realisateur: "Marc Webb",
        acteurs: "Rachel Zegler, Gal Gadot, Andrew Burnap",
        synopsis: "Blanche-Neige des studios Disney est une nouvelle version du classique de 1937 en prises de vues réelles. Avec Rachel Zegler dans le rôle principal et Gal Gadot dans celui de sa belle-mère, la Méchante Reine. Cette aventure magique retourne aux sources du conte intemporel avec les adorables Timide, Prof, Simplet, Grincheux, Joyeux, Dormeur et Atchoum.",
        bandeAnnonce: "https://youtu.be/rOtfV8bmLH8?si=53R2bWHA685R-Kqh"
    },
    "Novocaïne": {
        theme: "Action, Thriller",
        realisateur: "Dan Berk, Robert Olsen",
        acteurs: "Jack Quaid, Amber Midthunder, Ray Nicholson",
        synopsis: "Lorsque la fille de ses rêves est kidnappée, Nate, un homme ordinaire, transforme son incapacité à ressentir la douleur en une force inattendue dans son combat pour la retrouver.",
        bandeAnnonce: "https://youtu.be/K0-GsOM_JqY?si=660OXzx_6jOqIyXX"
    },
    "Minecraft : Le film": {
        theme: "Aventure, Comédie, Famille",
        realisateur: "Jared Hess",
        acteurs: "Jack Black, Jason Momoa, Danielle Brooks",
        synopsis: "Bienvenue dans l'univers de Minecraft où la créativité est essentielle à la survie ! Quatre outsiders – Garrett, Henry, Natalie et Dawn – sont soudainement projetés à travers un mystérieux portail menant à La Surface – un incroyable monde cubique qui prospère grâce à l'imagination. Pour rentrer chez eux, il leur faudra maîtriser ce monde (et le protéger de créatures maléfiques comme les Piglins et les Zombies), tout en s'engageant dans une quête fantastique aux côtés de Steve, expert fabricateur. Cette aventure les poussera à être audacieux et à développer leur créativité. Autant de facultés dont ils auront besoin pour s'épanouir dans le monde réel.",
        bandeAnnonce: "https://youtu.be/7wH09BTl5FU?si=y5zypMuHBZ64Tcfh"
    },
    "Sinners": {
        theme: "Action, Epouvante-horreur, Thriller",
        realisateur: "Ryan Coogler",
        acteurs: "Michael B. Jordan, Hailee Steinfeld, Jack O'Connell",
        synopsis: "Alors qu'ils cherchent à s'affranchir d'un lourd passé, deux frères jumeaux reviennent dans leur ville natale pour repartir à zéro. Mais ils comprennent qu'une puissance maléfique bien plus redoutable guette leur retour avec impatience …",
        bandeAnnonce: "https://youtu.be/xOjyx-U0O0U?si=bTQIRXDJVNrp4QAt"
    },
    "Ravage": {
        theme: "Action, Thriller",
        realisateur: "Gareth Evans",
        acteurs: "Tom Hardy, Forest Whitaker, Timothy Olyphant",
        synopsis: "Un détective meurtri doit se frayer un chemin dans la clandestinité criminelle après une affaire de drogue qui a mal tourné pour sauver le fils d'un politicien, tout en démêlant un réseau de corruption et de conspiration qui prend au piège toute la ville.",
        bandeAnnonce: "https://youtu.be/MQByfeqI7_8?si=Z_Pe0m2J7XtyCA_r"
    },
    "Thunderbolts*": {
        theme: "Action, Fantastique",
        realisateur: "Jake Schreier",
        acteurs: "Florence Pugh, Sebastian Stan, David Harbour",
        synopsis: "Marvel Studios rassemble une équipe de anti-héros peu conventionnelle : Yelena Belova, Bucky Barnes, Red Guardian, Le Fantôme, Taskmaster et John Walker. Tombés dans un piège redoutable tendu par Valentina Allegra de Fontaine, ces laissés pour compte complètement désabusés doivent participer à une mission à haut risque qui les forcera à se confronter aux recoins les plus sombres de leur passé. Ce groupe dysfonctionnel se déchirera-t-il ou trouvera-t-il sa rédemption en s'unissant avant qu'il ne soit trop tard ?",
        bandeAnnonce: "https://youtu.be/BZOVqJNpD8Y?si=MTjbV3JaCwqv9G3p"
    },
    "Destination Finale : Bloodlines": {
        theme: "Epouvante-horreur, Thriller",
        realisateur: "Zach Lipovsky, Adam B. Stein",
        acteurs: "Brec Bassinger, Teo Briones, Kaitlyn Santa Juana",
        synopsis: "Hantée par un cauchemar terrifiant qui revient sans cesse, Stefanie, étudiante à l'université, rentre chez elle pour retrouver la trace de la seule personne susceptible d'enrayer ce cycle infernal et de sauver ses proches du sort funeste qui les attend…",
        bandeAnnonce: "https://youtu.be/r8-484hD1NY?si=9gp-2yNFEzNLacyh"
    },
    "Mission Impossible : The Final Reckoning": {
        theme: "Action, Espionnage, Thriller",
        realisateur: "Christopher McQuarrie",
        acteurs: "Tom Cruise, Simon Pegg, Rebecca Ferguson",
        synopsis: "Nos vies sont la somme de nos choix.",
        bandeAnnonce: "https://youtu.be/rfFHDTzw0xY?si=hI_e_9lSJ8avxZ3b"
    },
    "Lilo & Stitch": {
        theme: "Aventure, Comédie, Famille, Science Fiction",
        realisateur: "Dean Fleischer-Camp",
        acteurs: "Zach Galifianakis, Maia Kealoha, Billy Magnussen",
        synopsis: "L'histoire touchante et drôle d'une petite fille hawaïenne solitaire et d'un extra-terrestre fugitif qui l'aide à renouer le lien avec sa famille.",
        bandeAnnonce: "https://youtu.be/PTTS50KDPas?si=qsdpkRNL338supov"
    },
    "Karate Kid: Legends": {
        theme: "Comédie, Drame, Arts Martiaux",
        realisateur: "Jonathan Entwistle",
        acteurs: "Ben Wang, Jackie Chan, Ralph Macchio",
        synopsis: "Après avoir vécu une tragédie personnelle, le jeune prodige de kung-fu Li Fong est arraché à sa famille à Pékin et contraint de s'installer à New York avec sa mère. Il tente de tirer un trait sur son passé tout en cherchant à s'intégrer dans son nouveau lycée. Et même s'il ne cherche pas la bagarre, il semble constamment s'attirer des ennuis. Lorsqu'un ami dont il vient de faire la connaissance sollicite son aide, Li accepte de participer à une compétition de karaté, mais il comprend qu'il ne peut pas seulement compter sur son talent. Son professeur de kung-fu, M. Han, engage alors le premier Karaté Kid, Daniel LaRusso, en renfort. Li découvre un nouveau style de combat réunissant leurs deux approches dont il se servira pour l'affrontement ultime…",
        bandeAnnonce: "https://youtu.be/5oOVdLWaLME?si=W5fRLWskGZcLTK7i"
    },
    "Ballerina": {
        theme: "Action, Thriller",
        realisateur: "Len Wiseman",
        acteurs: "Ana de Armas, Keanu Reeves, Ian McShane",
        synopsis: "Se déroulant pendant John Wick : Parabellum, Ballerina suit la vengeance implacable d'Eve Macarro la nouvelle tueuse de l'organisation Ruska Roma.",
        bandeAnnonce: "https://youtu.be/3Q_AhprPc4M?si=X_WE-fh-naxjtoNd"
    },
    "Dragons": {
        theme: "Action, Aventure, Fantastique",
        realisateur: "Dean DeBlois",
        acteurs: "Mason Thames, Nico Parker, Gerard Butler",
        synopsis: "Sur la rude île de Berk, où les Vikings et les dragons sont des ennemis jurés depuis des générations, Harold se distingue. Fils inventif mais négligé du chef Stoïck la brute, Harold défie des siècles de tradition en se liant d'amitié avec le dragon Krokmou, une Furie Nocturne. Il va ainsi bouleverser la vie des habitants de l'île.",
        bandeAnnonce: "https://youtu.be/seY55AKGmxQ?si=wE2U-itScBY2Z807"
    },
    "28 ans plus tard": {
        theme: "Epouvante-horreur, Thriller",
        realisateur: "Danny Boyle",
        acteurs: "Aaron Taylor-Johnson, Jodie Comer, Ralph Fiennes",
        synopsis: "Danny Boyle, réalisateur oscarisé, et Alex Garland, scénariste nommé à l'Oscar, se retrouvent pour 28 ANS PLUS TARD, nouvel opus terrifiant de la saga initiée par le film 28 JOURS PLUS TARD. Cela fait près de trente ans que le Virus de la Fureur s'est échappé d'un laboratoire d'armement biologique. Alors qu'un confinement très strict a été mis en place, certains ont trouvé le moyen de survivre parmi les personnes infectées. C'est ainsi qu'une communauté de rescapés s'est réfugiée sur une petite île seulement reliée au continent par une route, placée sous haute protection. Lorsque l'un des habitants de l'île est envoyé en mission sur le continent, il découvre que non seulement les infectés ont muté, mais que d'autres survivants aussi, dans un contexte à la fois mystérieux et terrifiant…",
        bandeAnnonce: "https://youtu.be/tklGxHxjaaE?si=dDEjNuBXWie9mtyc"
    },
    "Elio": {
        theme: "Aventure, Animation, Comédie, Famille, Science Fiction",
        realisateur: "Adrian Molina, Domee Shi, Madeline Sharafian",
        acteurs: "Yonas Kibreab, Zoe Saldana, Jameela Jamil",
        synopsis: "Elio, un garçon à l'imagination débordante et passionné par les extraterrestres, se retrouve téléporté par inadvertance dans le Communiverse, un paradis interplanétaire abritant des formes de vie intelligentes venues des galaxies les plus lointaines. Pris à tort pour l'ambassadeur de la Terre par cette organisation intergalactique, Elio devra surmonter une série d'épreuves inattendues, nouer des liens avec des créatures excentriques et faire face à une crise d'une ampleur cosmique. Cette aventure hors du commun l'amènera non seulement à défendre sa planète mais aussi à découvrir qui il est réellement destiné à être.",
        bandeAnnonce: "https://youtu.be/IngDV-5W4bo?si=xw5gIzex2p0Zu_lM"
    },
    "F1": {
        theme: "Action",
        realisateur: "Joseph Kosinski",
        acteurs: "Brad Pitt, Damson Idris, Javier Bardem",
        synopsis: "Un coureur automobile sort de sa retraite pour servir de mentor à un jeune pilote dans l'espoir de connaître la gloire à nouveau...",
        bandeAnnonce: "https://youtu.be/3jdRGVSmhEg?si=mKyrdOMZBs1orWH_"
    },
    "M3GAN 2.0": {
        theme: "Epouvante-horreur, Thriller",
        realisateur: "Gerard Johnstone",
        acteurs: "Allison Williams, Amie Donald, Violet McGraw",
        synopsis: "Suite du film M3GAN (2022).",
        bandeAnnonce: "https://youtu.be/yBWta9RSikw?si=apnf8zg3Mv9EVznG"
    },
    "Jurassic World : Renaissance": {
        theme: "Action, Aventure",
        realisateur: "Gareth Edwards",
        acteurs: "Scarlett Johansson, Jonathan Bailey, Mahershala Ali",
        synopsis: "Information non disponible",
        bandeAnnonce: "https://youtu.be/LV4QZBPvyI0?si=iXkU86St9sS_2gI3"
    },
    "Superman": {
        theme: "Action, Science Fiction",
        realisateur: "James Gunn",
        acteurs: "David Corenswet, Rachel Brosnahan, Nathan Fillion",
        synopsis: "Information non disponible",
        bandeAnnonce: "https://youtu.be/LqCtYoWB4XQ?si=msGKlegykW-0UnqN"
    },
    "Les Schtroumpfs - Le film": {
        theme: "Animation, Comédie, Famille, Musical, Comédie musicale",
        realisateur: "Chris Miller",
        acteurs: "Sofia Essaïdi, Rihanna, James Corden",
        synopsis: "Lorsque le Grand Schtroumpf est mystérieusement kidnappé par les vilains sorciers : Razamel et Gargamel, la Schtroumpfette et son meilleur ami Le Schtroumpf Sans-Nom partent en mission pour le retrouver ! Commence alors une aventure délirante où nos héros bleus vont croiser la route de nouveaux amis hauts en couleur comme Mama Poot et ses petits. Les Schtroumpfs doivent prendre en main leur destin pour sauver celui du monde entier !",
        bandeAnnonce: "https://youtu.be/L-zAX6Z6Hac?si=TzvUREgJxOzotvqN"
    },
    "Souviens toi… l'été dernier": {
        theme: "Epouvante-horreur, Thriller",
        realisateur: "Jennifer Kaytin Robinson",
        acteurs: "Madelyn Cline, Sarah Pidgeon, Tyriq Withers",
        synopsis: "Information non disponible",
        bandeAnnonce: ""
    },
    "Les 4 Fantastiques : Premier pas": {
        theme: "Action, Fantastique",
        realisateur: "Matt Shakman",
        acteurs: "Pedro Pascal, Vanessa Kirby, Joseph Quinn",
        synopsis: "LES 4 FANTASTIQUES : PREMIERS PAS nous plonge dans un univers rétro-futuriste inspiré des années 1960 et permet de retrouver à l'écran : Reed Richards (alias Mr. Fantastique), Sue Storm (alias la Femme Invisible), Johnny Storm (alias la Torche Humaine) et Ben Grimm (alias la Chose). Face à cette famille forcée de trouver un équilibre entre leur rôle de super-héros et la force des liens qui les unissent, se dresse une menace démesurée : l'entité cosmique Galactus et son énigmatique bras droit le Surfeur d'Argent dont l'ambition n'est autre que de dévorer la Terre entière et tous ses habitants. Et comme si tout ceci ne suffisait pas, les choses prennent soudainement une tournure très personnelle...",
        bandeAnnonce: "https://youtu.be/5jqukJMlxk4?si=qQ12ykwlqa9J7tkQ"
    },
    "One Battle After Another": {
        theme: "Action, Drame, Thriller",
        realisateur: "Paul Thomas Anderson",
        acteurs: "Leonardo DiCaprio, Teyana Taylor, Sean Penn",
        synopsis: "Information non disponible",
        bandeAnnonce: ""
    },
    "Conjuring : L'heure du jugement": {
        theme: "Epouvante-horreur",
        realisateur: "Michael Chaves",
        acteurs: "Vera Farmiga, Patrick Wilson, Ben Hardy",
        synopsis: "Une nouvelle investigation paranormale pour les époux Warren.",
        bandeAnnonce: ""
    },
    "The Bride !": {
        theme: "Fantastique, Epouvante-horreur, Romance",
        realisateur: "Maggie Gyllenhaal",
        acteurs: "Jessie Buckley, Christian Bale, Annette Bening",
        synopsis: "Années 1930. Frankenstein se rend à Chicago pour demander l'aide du Docteur Euphronius afin de se créer une compagne. Les deux hommes redonnent vie à une jeune femme assassinée.",
        bandeAnnonce: ""
    },
    "Michael": {
        theme: "Biopic, Musical",
        realisateur: "Antoine Fuqua",
        acteurs: "Jaafar Jackson, Juliano Krue Valdi, Colman Domingo",
        synopsis: "Biopic sur la légende de la musique, Michael Jackson.",
        bandeAnnonce: ""
    },
    "Saw XI": {
        theme: "Epouvante-horreur",
        realisateur: "Information non disponible",
        acteurs: "Information non disponible",
        synopsis: "Information non disponible",
        bandeAnnonce: ""
    },
    "Tron : Ares": {
        theme: "Action, Science Fiction",
        realisateur: "Joachim Rønning",
        acteurs: "Jared Leto, Greta Lee, Evan Peters",
        synopsis: "L'étonnante aventure d'un Programme hautement sophistiqué du nom de Ares, envoyé du monde numérique au monde réel pour une mission dangereuse qui marquera la première rencontre de l'humanité avec des êtres dotés d'une intelligence artificielle…",
        bandeAnnonce: ""
    },
    "Kaamelott - Deuxième volet": {
        theme: "Aventure, Comédie, Historique",
        realisateur: "Alexandre Astier",
        acteurs: "Alexandre Astier",
        synopsis: "Information non disponible",
        bandeAnnonce: ""
    },
    "Predator : Badlands": {
        theme: "Action, Epouvante-horreur, Science Fiction",
        realisateur: "Dan Trachtenberg",
        acteurs: "Information non disponible",
        synopsis: "Information non disponible",
        bandeAnnonce: ""
    },
    "Insaisissables 3": {
        theme: "Aventure, Comédie, Thriller",
        realisateur: "Ruben Fleischer",
        acteurs: "Morgan Freeman, Jesse Eisenberg, Woody Harrelson",
        synopsis: "Information non disponible",
        bandeAnnonce: ""
    },
    "The Running Man": {
        theme: "Science Fiction, Thriller",
        realisateur: "Edgar Wright",
        acteurs: "Glen Powell, Katy O'Brian, Daniel Ezra",
        synopsis: "Premier quart du xxie siècle. La dictature s'est installée aux États-Unis. La télévision, arme suprême du nouveau pouvoir, règne sans partage sur le peuple. Une chaîne unique diffuse une émission de jeux suivie par des millions de fans : c'est « La Grande Traque ». Ben Richards, un homme qui n'a plus rien à perdre, décide de s'engager dans la compétition mortelle. Pendant trente jours il devra fuir les redoutables « chasseurs » lancés sur sa piste et activement aidés par une population encouragée à la délation. Tous les moyens sont bons pour éliminer Ben Richards…",
        bandeAnnonce: ""
    },
    "Wicked : For Good": {
        theme: "Aventure, Fantastique, Romance",
        realisateur: "Jon M. Chu",
        acteurs: "Ariana Grande, Cynthia Erivo, Jonathan Bailey",
        synopsis: "Information non disponible",
        bandeAnnonce: ""
    },
    "Zootopie 2": {
        theme: "Aventure, Animation, Comédie, Famille",
        realisateur: "Byron Howard, Rich Moore",
        acteurs: "Ginnifer Goodwin, Jason Bateman, Ke Huy Quan",
        synopsis: "Les agents de police Judy Hopps et Nick Wilde doivent suivre la piste sinueuse d'un mystérieux reptile qui arrive à Zootopie et met la métropole des mammifères sens dessus dessous. Pour résoudre l'affaire, Judy et Nick doivent se rendre sous couverture dans des quartiers inconnus de la ville. Cette mission va mettre à l'épreuve leur relation personnelle et professionnelle comme jamais auparavant.",
        bandeAnnonce: ""
    },
    "Frankenstein": {
        theme: "Drame, Epouvante-horreur, Science Fiction",
        realisateur: "Guillermo del Toro",
        acteurs: "Oscar Isaac, Jacob Elordi, Mia Goth",
        synopsis: "Europe de l'Est,19e siècle. Le Docteur Pretorious part à la recherche de Frankenstein, que l'on croyait mort dans un incendie quarante ans auparavant. Son but est de poursuivre les expériences du créateur du monstre, le Docteur Frankenstein.",
        bandeAnnonce: ""
    },
    "Five Nights at Freddy's 2": {
        theme: "Epouvante-horreur",
        realisateur: "Emma Tammi",
        acteurs: "Josh Hutcherson, Elizabeth Lail, Matthew Lillard",
        synopsis: "Information non disponible",
        bandeAnnonce: ""
    },
    "Avatar : Fire and Ash": {
        theme: "Aventure, Animation, Science Fiction",
        realisateur: "James Cameron",
        acteurs: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
        synopsis: "Information non disponible",
        bandeAnnonce: ""
    },
    "Horizon : Chapitre 2": {
        theme: "Drame, Western",
        realisateur: "Kevin Costner",
        acteurs: "Kevin Costner, Sienna Miller, Sam Worthington",
        synopsis: "Information non disponible",
        bandeAnnonce: ""
    },
    "Bob l'éponge": {
        theme: "Animation, Comédie, Famille",
        realisateur: "Derek Drymon",
        acteurs: "Information non disponible",
        synopsis: "Un spin-off de Bob l'éponge centré sur le personnage de Sandy Cheeks, l'écureuil.",
        bandeAnnonce: ""
    }
};

// Fonction pour récupérer les informations d'un film
function getFilmInfo(filmTitle) {
    // Vérifier si le film existe dans la base de données prédéfinie
    if (filmDatabase[filmTitle]) {
        return filmDatabase[filmTitle];
    }
    
    // Si non trouvé, chercher dans les films ajoutés par l'utilisateur
    const userFilms = JSON.parse(localStorage.getItem("userFilms")) || [];
    const userFilm = userFilms.find(film => film["Titre du film"] === filmTitle);
    
    if (userFilm) {
        return {
            theme: userFilm.theme || "Information non disponible",
            realisateur: userFilm.realisateur || "Information non disponible",
            acteurs: userFilm.acteurs || "Information non disponible", 
            synopsis: userFilm.synopsis || "Information non disponible",
            bandeAnnonce: userFilm.bandeAnnonce || ""
        };
    }
    
    // Si toujours pas trouvé, essayer par correspondance partielle dans la base de données prédéfinie
    for (const title in filmDatabase) {
        if (title.includes(filmTitle) || filmTitle.includes(title)) {
            return filmDatabase[title];
        }
    }
    
    // Essayer par correspondance partielle dans les films utilisateur
    for (const film of userFilms) {
        if (film["Titre du film"].includes(filmTitle) || filmTitle.includes(film["Titre du film"])) {
            return {
                theme: film.theme || "Information non disponible",
                realisateur: film.realisateur || "Information non disponible",
                acteurs: film.acteurs || "Information non disponible",
                synopsis: film.synopsis || "Information non disponible",
                bandeAnnonce: film.bandeAnnonce || ""
            };
        }
    }
    
    // Si aucune correspondance n'est trouvée, retourner des informations par défaut
    return {
        theme: "Information non disponible",
        realisateur: "Information non disponible",
        acteurs: "Information non disponible",
        synopsis: "Information non disponible",
        bandeAnnonce: ""
    };
}