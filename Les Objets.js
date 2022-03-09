// Les objets

// Un objet est un ensemble de propriétés et une propriété est une association entre un nom (aussi appelé clé) et une valeur.
// Un objet c'est une espèce de grosse variable qui contient des valeurs et cela fonctionne avec des clés
// Entre chaque clé et valeur il doit toujours il y avoir un :
// Après chaque clé et valeur il doit toujours y avoir une virgule pour séparer la prochaine


// DECLARER DE MANIERE LITTERAL(la basique)
let combattant = {n1 : "Myata", n2 : "Mashiba", n3 : "Randy Boy JR"};
console.log(combattant.n1 + " " + combattant.n2 + " " + combattant.n3);

console.log("-----------------------------");
// On peut mettre des string des number des variables ou même une fonction à l'intérieur 

let pays = "Camerounais";
let maxime = {age : 18, taille : "1m84", origine : pays};
console.log(maxime.age + " ans " + maxime.taille + " " + maxime.origine);

// Autre manière de déclarer des objets

console.log(maxime['origine']);
console.log(maxime["taille"]);

// Pour mettre à jour une propriétés
maxime.taille = "1m85";
console.log(maxime.taille);

console.log("-----------------------------");

// 2ème manière de faire un objet (comme la basique mais sur plusieurs lignes)
let yvelines = {
ville1 : "Conflans",
ville2 : "Poissy",
};
console.log(yvelines.ville1 + " " + yvelines.ville2);

console.log("-----------------------------");

// 3ème manière de faire un objet
let afrique = new Object();
afrique.pays1 = "Cameroun 237 R.A.S";
afrique.pays2 = "Congo 243 R.A.S";
console.log(afrique.pays1 + "  -  " + afrique.pays2);

console.log("-----------------------------");

// Autre manière avec une fonction cette foi-ci
// Le mot-clé this sert à désigner précisement une propriété d'un objet 
// Sans fonction fléchées sinon le mot clé "this" déconne

// La manière de déclarer en  new object n'est pas recommandé 
    let record = new Object();
    record.mondiale = "USAIN BOLT 9.58 RECOOOORD DU MONNNDE";
    record.mondialeDit = function (){

        console.log("Athlétisme : " + this.mondiale);
    }

record.mondialeDit();

console.log("-----------------------------");
// Bouclé le titre des propriétées

for ( let boucle in record) {
    // Cela affiche le titre seulement
    console.log(boucle);
    // Pour affiché les valeurs aussi 
    console.log(record["mondiale"]);
}

let mundo = {
    parti : "Ca y est usain est bolt est parti",
    parti2 : "USAIN BOLT EST PARRRTTTIII",
    parti3 : "LE TGV L'EXPRESSE EST PARTII",
    partido : function ziak() {
        console.log(mundo.parti + " " + mundo.parti2);
        console.log(mundo.parti3 + " 9.58 RECOOOOORD DU MONDE" );
    }
}

mundo.partido();
