// les boîtes de Dialogues

// La boîtes alert permet d'ajouter un texte et un bouton OK

alert("Salut sa va");


// La boîte prompt permet d'afficher un message, un champ à remplir (input de type texte), deux bouton (OK et Annulé)
// Mais si tu ne met pas prompt dans une variable elle ne pourra pas stocker les informations qui ont été rentrer
// Le nom entré est stoké dans les donnés.
// Et en tapant le nom de la variable dans la console, qui acceuille "prompt". 
// Les informations qui ont été rentrer précédemment seront affiché

// SANS VARIABLE
prompt("Salut");

// AVEC UNE VARIABLE
let nom = prompt("Entrez votre prénom");
alert("Bonjour " + nom);


// La boîte confirm permet d'afficher un message, deux bouton (OK ou Annulé),
// Cette fonction en revanche retourne une valeur booléenne 
// Si tu clique sur "OK" elle va renvoyer true 
// Si tu clique sur "Annulé" elle va renvoyer false 
// Si tu tape le nom de la variable on verra alors  soit "true" soit "false"

let bac = confirm("Voulez vous vraiment quitté cette page");
alert(bac);
