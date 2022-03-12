// Arrays ("eurrey")
// Un array c'est une liste d'élément
// C'est différent des objets car ce système ne fonctionne pas avec des clés mais avec un système d'appelation numéroté 
// Ce systéme numéroté commence toujours par 0
// Un array est un objet


let bible = ["Cain","Abel","Totalement aux dédale Rue"];
console.log("Titre : Cain & Abel",bible);
// Appelation d'une valeur
// Cain vaut 0 et Abel vaut 1
console.log("Titre : Cain & Abel - ",bible[0]);
console.log("Titre : Cain & Abel - ",bible[1]);
// Si tu veux loger une numérotation que tu n'as pas définis, la console te renverras : undefined
console.log("Titre : Cain & Abel - ",bible[8]);

// Mettre à jour la valeur d'un array
bible[2] = "Seth"
console.log(bible[2]);

console.log(bible);

console.log("-------------------------------------------------");
// Deuxième manière de Déclararer un array
let Département = [];
Département[0] = 78;
Département[1] = 91;
console.log("Les Yvelines : " + Département[0] + " //  L'Essone : "+ Département[1]);

console.log("-------------------------------------------------");
// Troisième et dernière manière de déclarer un array avec la méthode push (recommandé)

let joueurs = [];
joueurs.push(' Ronaldo');
joueurs.push(' Messi');
joueurs.push(" Balotelli '2012'");
joueurs.push(' Neymar');

console.log(joueurs[0] + " " +  joueurs[1] + ". But Respect of " + joueurs[3]);
console.log("La méthode push : " + joueurs);

// Ces méthodes t'évite d'avoir à remettre à jour les bails de [0] [1]...
// Pour supprimer le dernier élément du array on applique la méthode "pop"

joueurs.pop();
console.log("La méthode pop : " + joueurs);

// Pour supprimer le premier élément du array on applique la méthode "shift"
joueurs.shift();
console.log("La méthode shift : " + joueurs);

// Pour ajouter un élément au début du tableau on applique la méthode "unshift"
joueurs.unshift(" Lewandowski");
console.log("La méthode unshift : " + joueurs);







