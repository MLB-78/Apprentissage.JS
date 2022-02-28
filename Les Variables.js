// Les variables de l'ES6 : let et const

// Une variable c'est l'association entre un nom et une valeur 
// Cela sert à nommer des valeurs, à les modifier, à rendre le code générique et réutilisable
// Chiffre interdit pour le 1er caractère, ponctuation interdite, méthode CamelCase conseillé
// Utilisez des noms qui ont du sens cela vous aidera lorsque vous allez relire votre code
// Pour lire une variable dans la console on utilise l'instruction "console.log"
// Pas besoin de "" ou de '' seulement le nom de la variable dans l'instruction

// Déclaration d'une variable sans valeur : let
let cameroun;
// Une variable peut être directement déclarer avec une valeur 
let afrique1 = "1,216 milliard d'habitant"
console.log(afrique1);
//Déclaration d'une variable avec un nombre 
const afrique2 = " en Afrique pour 55 pays";
// Concaténation de deux variables dans une instruction
console.log(afrique1 + afrique2);
// Caluler deux variables
let x = 5;
const y = 6;
console.log(x * y);
// Affecter des plusieurs valeurs 

let grand = 30;
let moyen = 15;
let petit = 5;

console.log(grand + moyen + 5);


// On peut mettre à jour une variable let 
let humeur = "heureux";
humeur = "pas content";
console.log(humeur); 
// On ne peut pas mettre à jour une constante (const) ni lui réassigner une valeur plus tard
// On la déclare alors en une seule fois
const ville = "Paris";

// Une deuxième

// les mises à jours

const maximeAge = 18;
console.log(maximeAge);

let maximeTaille = "1m85";
maximeTaille = "1m84";
console.log(maximeTaille);


// Scopes (pour ceux qui connaisent les conditions) let et const marchent de la même manière
// Le scope c'est l'endroit ou une variable peut-être utilisé. Soit globalement,soit localement

// Scope Globale

const poids = 83;
console.log(poids)

// Scope Locale

if (poids < 130) {   
    const poids = 85;
    console.log(poids);
}

// En vrai ces deux variables sont différentes la 1er est globale et la 2ème est locale et toute les
// deux afficheront des valeurs différentes.


















