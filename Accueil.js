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

var titleTable = ["Jour", "Mois", "Titre du film"];
var data = [
    { "Jour": "1", "Mois": "Janvier", "Titre du film": "L'amour au présent" },
    { "Jour": "15", "Mois": "Janvier", "Titre du film": "Wolfman" },
    { "Jour": "22", "Mois": "Janvier", "Titre du film": "Vol à haut risque" },
    { "Jour": "29", "Mois": "Janvier", "Titre du film": "Un parfait inconnu" },
    { "Jour": "12", "Mois": "Fevrier ", "Titre du film": "Captain America : Brave New World" },
    { "Jour": "19", "Mois": "Fevrier ", "Titre du film": "The Monkey" },
    { "Jour": "5", "Mois": "Mars", "Titre du film": "Mickey 17" },
    { "Jour": "14", "Mois": "Mars", "Titre du film": "The Electric State" },
    { "Jour": "19", "Mois": "Mars", "Titre du film": "Blanche-Neige" },
    { "Jour": "26", "Mois": "Mars", "Titre du film": "Novocaïne" },
    { "Jour": "2", "Mois": "Avril", "Titre du film": "Minecraft : Le film" },
    { "Jour": "16", "Mois": "Avril", "Titre du film": "Sinners" },
    { "Jour": "25", "Mois": "Avril", "Titre du film": "Ravage" },
    { "Jour": "30", "Mois": "Avril", "Titre du film": "Thunderbolts*" },
    { "Jour": "14", "Mois": "Mai", "Titre du film": "Destination Finale : Bloodlines" },
    { "Jour": "21", "Mois": "Mai", "Titre du film": "Mission Impossible : The Final Reckoning" },
    { "Jour": "21", "Mois": "Mai", "Titre du film": "Lilo & Stitch" },
    { "Jour": "28", "Mois": "Mai", "Titre du film": "Karate Kid: Legends" },
    { "Jour": "4", "Mois": "Juin", "Titre du film": "Ballerina" },
    { "Jour": "11", "Mois": "Juin", "Titre du film": "Dragons" },
    { "Jour": "18", "Mois": "Juin", "Titre du film": "28 ans plus tard" },
    { "Jour": "18", "Mois": "Juin", "Titre du film": "Elio" },
    { "Jour": "25", "Mois": "Juin", "Titre du film": "F1" },
    { "Jour": "25", "Mois": "Juin", "Titre du film": "M3GAN 2.0" },
    { "Jour": "4", "Mois": "Juillet", "Titre du film": "Jurassic World : Renaissance" },
    { "Jour": "9", "Mois": "Juillet ", "Titre du film": "Superman" },
    { "Jour": "16", "Mois": "Juillet", "Titre du film": "Les Schtroumpfs - Le film" },
    { "Jour": "16", "Mois": "Juillet", "Titre du film": "Souviens toi… l'été dernier" },
    { "Jour": "23", "Mois": "Juillet", "Titre du film": "Les 4 Fantastiques : Premier pas" },
    { "Jour": "6", "Mois": "Août", "Titre du film": "One Battle After Another" },
    { "Jour": "10", "Mois": "Septembre", "Titre du film": "Conjuring : L'heure du jugement" },
    { "Jour": "24", "Mois": "Septembre", "Titre du film": "The Bride !" },
    { "Jour": "1", "Mois": "Octobre", "Titre du film": "Michael" },
    { "Jour": "1", "Mois": "Octobre", "Titre du film": "Saw XI" },
    { "Jour": "8", "Mois": "Octobre", "Titre du film": "Tron : Ares" },
    { "Jour": "22", "Mois": "Octobre", "Titre du film": "Kaamelott - Deuxième volet" },
    { "Jour": "5", "Mois": "Novembre", "Titre du film": "Predator : Badlands" },
    { "Jour": "12", "Mois": "Novembre", "Titre du film": "Insaisissables 3" },
    { "Jour": "19", "Mois": "Novembre", "Titre du film": "The Running Man" },
    { "Jour": "19", "Mois": "Novembre", "Titre du film": "Wicked : For Good" },
    { "Jour": "26", "Mois": "Novembre", "Titre du film": "Zootopie 2" },
    { "Jour": "//", "Mois": "Novembre", "Titre du film": "Frankenstein" },
    { "Jour": "3", "Mois": "Decembre", "Titre du film": "Five Nights at Freddy's 2" },
    { "Jour": "17", "Mois": "Decembre", "Titre du film": "Avatar : Fire and Ash" },
    { "Jour": "17", "Mois": "Decembre", "Titre du film": "Horizon : Chapitre 2" },
    { "Jour": "17", "Mois": "Decembre", "Titre du film": "Bob l'éponge" }
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