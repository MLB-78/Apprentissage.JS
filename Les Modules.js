// En JavaScript, on place chaque module dans un fichier séparé. 
// On va ensuite pouvoir choisir quels éléments d'un module vont être exposés en les précédant d'une déclaration export.

// Définition
// exporter : Envoyer et vendre hors d'un pays (ses produits).
// importer : Introduire sur le territoire, Introduire (qqch., une coutume) dans un pays.

// 1ère manière d'exporter



maxime = () => {

    
    let information = {
    
        email : "maximebosse1@outlook.fr",
        nomPrenom : "Maxime Njo",
        âge : 18,
    
    };

    console.log(information.nomPrenom + " - " + information.email );
    
}

maxime();

module.exports = {
    maxime,

};


// 2ème manière d'exporter

// export function ManUnited() {

//     let attaquants = [
//         "Cristiano Ronaldo",
//         "Cavani",
//         "Mason Greenwood",
//     ];

//     console.log(attaquants[1]);

// };








