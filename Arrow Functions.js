// Arrow functions (=les fonctions fléchées)

// Ceci est une autre manière d'effectuer les fonctions


// SANS PARAMETRES
presenteToi = () => {
    console.log(" MLB");    
}

presenteToi();

// AVEC PARAMETRES
poids = (MLB) => {
    console.log('Tu pèse ' + MLB + " kg");
    
}
poids(83);

// AVEC PLUSIEURS PARAMETRES
ileDeFrance = (yvelines,essone,) => {
    console.log("Je me trouve actuellement dans le département du " + yvelines);
    console.log("Mais beaucoup sont aussi dans le " + essone);


}

ileDeFrance(78,91);



// Les fonctions fléchés ont d'autre fonctionnalité comme la capacité d'être mis sur une ligne mais ici 
