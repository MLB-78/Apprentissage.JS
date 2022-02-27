// Les conditions 
// Les conditions vont permettre d'éxécuter ou pas certaine partie d'un programme 

// EXERCICE MANEGE

// SI le poids du client est inférieur au poids maximum autorisé && Si l'argent du client est 
// supérieur ou égale prix du manège 
// ALORS "Vous pouvez montez monsieur"
// SINON "Vous Dégagez"
const poidsMaximumAutorise = 120;
const prixDuManege = 15;

let poidsDuClient = 83;
let argentDuClient = 15;

if (poidsDuClient < poidsMaximumAutorise && argentDuClient >= prixDuManege) {
    console.log("Vous pouvez montez monsieur ! ");
} else {
    console.log("Vous Dégagez !");
}

// EXERCICE BAC

let mentionAssezBien = 12;
let sansMention = 10;
let rattrapage = 8;

let MOI = 10.90;

if (MOI >= mentionAssezBien) {
    console.log("Félicitations ! Tu as obtenue ton BAC avec mention assez bien !");

} else if ( MOI >= sansMention) {
    console.log("Félicitation !  Tu as obtenue ton BAC !");

} else if (MOI >= rattrapage) {
    console.log("Dommage tu n'as pas obtenue ton examen, mais tu as encore une chance aux rattrapage");

} else {
    console.log("Tu l'as pas");
}

// SI MOI j'ai la mention assez bien
// ALORS "Félicitations ! Tu as obtenue ton BAC avec mention assez bien !"
// SINON SI MOI j'ai pas de mention
// ALORS "Félicitation !  Tu as obtenue ton BAC !"
// SINON SI MOI j'ai minimum 8 de moyenne 
// ALORS "Dommage tu n'as pas obtenue ton examen, mais tu as encore une chance aux rattrapage"
// SINON "Tu l'as pas"





