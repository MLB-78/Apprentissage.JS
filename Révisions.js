// Les strings
console.log("Ceci est une chaine de caractère");
console.log('Ceci est une concaténation ' + "de chaîne de caractères");
console.log("ceci est un nombre paire : " + "44")

console.log("-----------------------------------------");
// Les nombres
console.log(17);
console.log(17 - 10 + 3);

console.log("-----------------------------------------");
// Les variables

const monBiff = 2 * 100 + 20;
let euOù = "C'est l'argent que j'ai obtenue à mes stages et à mon anniversaire ";
console.log(monBiff + " €. " + euOù );

console.log("-----------------------------------------");

// Les scopes (globales et locales)

let cameroun = 237;
function équipage (shoto) {
    let cameroun = "Le cameroun dans mon coeur"
    console.log(cameroun + shoto);
}

équipage(" à jamais");

console.log(cameroun);

console.log("-----------------------------------------");

// Mise à jour d'une variable, objet, array

// variable
let total = 14;
console.log(total);
total = 12;
console.log(total);

// objet
let qualité = {
    b1 : "Gentil",
    b2 : "Polie",
    b3 : "à l'heure",
}

console.log(qualité.b1,qualité.b2,qualité.b3);
qualité.b2 = "Insolent";
console.log(qualité.b1,qualité.b2,qualité.b3);

// array
let affichePL = ["Manchester United VS Tottenham", "Paris Saint Germain VS Real Madrid"];
console.log(affichePL[0] + "  /  " +affichePL[1]);
affichePL[1] = 'Atlético Madrid VS Cadix';
console.log(affichePL[0] + "  /  " +affichePL[1]);


console.log("-----------------------------------------");

// Les conditions
// meilleur note général dans fifa

let messi = 93;
let mbappé = 90;
let neymar = 91;
let cristiano = 91;

if (messi > mbappé) {
    console.log("Messi à une meilleur note générale que mbappé");
} else {
    console.log("Mbappé à une meilleure note générale que Messi");
}


if (neymar < cristiano) {
    console.log("Neymar n'auras jamais le talent de CR7");
    
} else if (neymar > cristiano) {
    
    console.log("Neymar à prouver qu'il était un très grand joueur mais CR7 est née sur une autre planète");
    
} else if (neymar === cristiano) {
    console.log("Neymar réclame son droit de s'assoir à la table des GOATS");
}

console.log("-----------------------------------------");
// Nombre aléatoire )(On crache pas sur les tuto ytb c'est la base)

let aléatoire = Math.floor(Math.random () * 11);
console.log('Ceci est un nombre alétoire : ' + aléatoire);

console.log("-----------------------------------------");

// Les arrays

let taf = ["vendeur Décathlon", " Vendeur Castorama", "Retourné Chez le vieux"];
console.log(taf);
console.log(taf[0]);

let ville = [
    "Grigny - 91",
    'Saint Ger - 78',
    'Clichy -  92',
]
console.log(ville);
console.log(ville[2]);

// pop

ville.pop();
console.log(ville);
console.log(ville[2]);
console.log(ville[1]);

// shift 

ville.shift();
console.log(ville);
console.log(ville[0]);

// unshift 

ville.unshift("Conflans Saint Honorine - 78");
console.log(ville);
console.log(ville[0]);


console.log("-----------------------------------------");
// Les boucles

// quand tu sais pas
let t = 0;

while (t < 3) {
    t = t + 1;
    console.log(t);
    
}

// quand tu sais 
for(let bus = 1; bus < 5; bus = bus + 1){
    console.log('Ce bus passe à ' + bus + " heure de l'après-midi");
}
console.log("-----------------------------------------");

// Les fonctions 

function rediffusion (e,y) {
    let CamerounVsAlgérie = 18;
    let CongoVsTogo = 19;

    console.log("Le match du Cameroun contre l'Algérie se jouera à :  " + CamerounVsAlgérie + "h au stade "+ e);
    console.log("Le match du Congo contre le Togo se jouera à :  " + CongoVsTogo + "h au stade " + y);
}

rediffusion("d'Olembè", " de Dibombary");

// variable fonction

let yvelines = function gettho (T, V, LV) {
    console.log(T, V, LV);
    console.log(6*6 + " heures d'abscence cette année :) au lycée de " + V );
}

yvelines("Trappes ","Versailles"," Le Vésinet");

console.log("-----------------------------------------");

// Le return
// Pour que le mot clé return fonctionne, il faut loger la fonction dans laquelle se trouve le mot clé return
// et sa donne ziak et sa donne sa et sa donne ziak et sa donne 

ziak = () => {
    let salariés = 187;

    if (salariés <= 49) {
        return "Ceci est une petite entreprise";

    } else if (salariés <= 199) {
        return "Ceci est une moyenne entreprise";

    } else if (salariés >= 200) {
        return "Ceci est une grande entreprise";
    }
 

}

console.log(ziak());
console.log("-----------------------------------------");

// les booléens

console.log(18 === 18);
console.log(17 !== 14);
const er = 10
console.log(5 + 5 === er && er !== 24 );

console.log("-----------------------------------------");
// Arrows functions

superHeros = () => {
    const label = "DC Comics";
    const label2 = "Marvel";
    console.log("Batman et Superman font partie du label : "+ label);
    console.log("Iron Man et Black Panther font partie du label : " + label2);
}

superHeros();


console.log("-----------------------------------------");
// typeoff
let instru = "Kamal à la prod'z"
console.log(typeof instru);

console.log("-----------------------------------------");

// Les objets 

let project = {
    voeux1 : "Partir", 
    voeux2 : "Rester", 
    voeux3 : "Réussir"
};

console.log(project);
console.log(project.voeux2);
;

// mixi fonction
// sans le mot clé 'this' l'appelle de bolt et ronaldo ne fonctionne pas

let record = {

    ronaldo : "CR7 meilleurs buteurs de tout les temps ",
    bolt : "Le record de l'homme le plus rapide sur 100 mètres est détenu pas Usain Bolt",

    new : function zua () {
        console.log(this.ronaldo);
        console.log(this.bolt);
    }

}

record.new();

// J'ai tout réussi sans recherche SAUF pour typeof et return :) 
