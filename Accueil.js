class Table {
    constructor(headTable, dataTable) {
        this.headTable = headTable;
        this.dataTable = dataTable;
    }

    getHeadTable() {
        return this.headTable;
    }

    getDataTable() {
        return this.dataTable;
    }

    setDataTable(dataTable) {
        this.dataTable = dataTable;
    }

    setHeadTable(headTable) {
        this.headTable = headTable;
    }

    headTablee() {
        let header = "<tr>";
        this.headTable.forEach((title) => {
            header += "<th>" + title + "</th>";
        });
        header += "</tr>";
        return header;
    }

    contentTable() {
        let content = "";
        this.dataTable.forEach((rowData) => {
            content += "<tr>";
            for (let field of this.headTable) {
                content += `<td>${rowData[field]}</td>`;
            }
            content += "</tr>";
        });
        return content;
    }

    consituteTable() {
        return this.headTablee() + this.contentTable();
    }
}

// Initialisation et logique de recherche
var titleTable = ["Mois", "Jour", "Titre du film"];
var data = [
    { "Mois": "Janvier", "Jour": "15", "Titre du film": "Wolf Man" },
    { "Mois": "Fevrier", "Jour": "12", "Titre du film": "Captain America: Brave New World" },
    { "Mois": "Mars", "Jour": "19", "Titre du film": "Blanche Neige" },
    { "Mois": "Avril", "Jour": "2", "Titre du film": "Minecraft, le film" },
    { "Mois": "Avril", "Jour": "16", "Titre du film": "Mickey 17" },
    { "Mois": "Avril", "Jour": "30", "Titre du film": "Thunderbolts" },
    { "Mois": "Mai", "Jour": "14", "Titre du film": "Destination Finale : Bloodlines" },
    { "Mois": "Mai", "Jour": "21", "Titre du film": "Lilo & Stitch" },
    { "Mois": "Mai", "Jour": "21", "Titre du film": "Mission Impossible : Dead Reckoning, partie 2" },
    { "Mois": "Mai", "Jour": "28", "Titre du film": "Karate Kid : Legends" },
    { "Mois": "Juin", "Jour": "4", "Titre du film": "Ballerina" },
    { "Mois": "Juin", "Jour": "11", "Titre du film": "Dragons" },
    { "Mois": "Juin", "Jour": "18", "Titre du film": "28 ans plus tard" },
    { "Mois": "Juin", "Jour": "18", "Titre du film": "Elio" },
    { "Mois": "Juillet", "Jour": "2", "Titre du film": "Jurassic World : Renaissance" },
    { "Mois": "Juillet", "Jour": "9", "Titre du film": "Superman" },
    { "Mois": "Juillet", "Jour": "16", "Titre du film": "Les Schtroumpfs" },
    { "Mois": "Juillet", "Jour": "23", "Titre du film": "Les Quatres Fantastiques" },
    { "Mois": "Juillet", "Jour": "23", "Titre du film": "Souviens-toi... l'été dernier" },
    { "Mois": "Octobre", "Jour": "1", "Titre du film": "Saw XI" },
    { "Mois": "Octobre", "Jour": "8", "Titre du film": "Tron : Ares" },
    { "Mois": "Octobre", "Jour": "22", "Titre du film": "Kaamelott - Deuxième volet (partie 1)" },
    { "Mois": "Novembre", "Jour": "5", "Titre du film": "Predator : Badlands" },
    { "Mois": "Novembre", "Jour": "12", "Titre du film": "Insaisissables 3" },
    { "Mois": "Novembre", "Jour": "19", "Titre du film": "The Running Man" },
    { "Mois": "Novembre", "Jour": "26", "Titre du film": "Zootopie 2" },
    { "Mois": "Novembre", "Jour": "26", "Titre du film": "Wicked Partie 2" },
    { "Mois": "Decembre", "Jour": "3", "Titre du film": "Five Nights at Freddy's 2" },
    { "Mois": "Decembre", "Jour": "17", "Titre du film": "Avatar : De feu et de cendre" },
    { "Mois": "Decembre", "Jour": "17", "Titre du film": "Bob l'éponge" }
];

var table = new Table(titleTable, data);
var searchTimeOut;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("table").innerHTML = table.consituteTable();

    document.getElementById("search").addEventListener("keyup", (event) => {
        clearTimeout(searchTimeOut);
        searchTimeOut = setTimeout(() => {
            let searchValue = event.target.value.toLowerCase();
            let filteredData = data.filter(film => 
                film["Titre du film"].toLowerCase().includes(searchValue) ||
                film["Mois"].toLowerCase().includes(searchValue) ||
                film["Jour"].toLowerCase().includes(searchValue)
            );

            if (filteredData.length > 0) {
                table.setDataTable(filteredData);
                document.getElementById("table").innerHTML = table.consituteTable();
            }
        }, 500);
    });
});
