// Les promesses

// Promise est de type objet, il sert à faire du code différer dans le temps
// Il est souvent utilisé pour les API
// Pour déclarer une promesse tu la met dans une variable qui va prendre pour valeur le 'new Promise()' 
// Après ça se comporte comme une fonction fléchées, mais ça n'en ai pas une, tu n'as pas besoin de l'appeler
// si tu utilise un log dedans elle va le lire
// Pour les promesses c'est toujours les mêmes paramètres resolve et reject


// Déclaration 


let afrique = new Promise ((resolve, reject) => {


    let cameroun = 237;

    if(cameroun === 237){

        resolve();

    } else{

        reject("Dégagez c'est normal");
    }

});


// Utilisation

// "then" c'est si c'est resolve
// "catch" c'est si c'est reject
// Tu peux même modéliser le message d'erreur avec reject


afrique.then(() => {

    console.log("Ziaka");

});
afrique.catch (() => {

    console.log("OATS");

});


// A toi 

let boxing  = new Promise ((resolve,reject) => { 

    let genFifa15 = {
        leo : 94,
        cr7 : 93,
    
    };


    if (genFifa15.leo > genFifa15.cr7) {
        resolve();
        
    } else {
        reject("C'est bien fakinf Bro BRoddddaar");
        
    }
    
    
});


boxing.then(() => {
    console.log("En 2015 leo messi était plus fort que cr7");
    
});

boxing.catch ( () => {
    
    console.log("En 2015 cr7 était plus fort que leo messi");
});


// Et encore zmaa zmaaa

const aléatoire = new Promise ((resolve,reject) => {

    let nombre = Math.floor(Math.random () * 11);
    console.log("Ceci est un nombre aléatoire : " + nombre);


    if (nombre >= 5) {

        resolve();
        
    } else {
        reject("En dessous de 5 :(");
        
    }
    
})

aléatoire.then(() => {

    console.log('Supérieur ou égal à 5 :)');


});

// C'est asynchrone oui


// méthode : quand tu fait un" objet()" avec une parenthèse 
//  tu dois faire comme si il y avait une fonction à l'intérieur : 
//                       () => { }

