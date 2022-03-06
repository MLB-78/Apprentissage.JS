// Révisions des boucles et quand les utiliser
// Les boucles peuvent faire chauffer ton ordi alors belek

// Quand utiliser les boucles while, do while et for ?

// Pour la boucle while on doit l'utiliser "quand on ne sait pas" à l'avance combien de fois on doit répéter
let messi = 0;

while (messi <= 7){
    console.log("Messi à " + messi + " ballon d'or");
    messi = messi + 1;
}

// Pour la boucle do while, elle va être utilisé pour répéter le bloc d'instruction "au moins une fois"
// A l'instar de cette exemple de mdp tant qu'il n'est pas pareil que le bon mdp sa va bouclé
// Tant qu'il y aura une erreur le programme va nous demander de recommencer

ziak = () => {
    motDePasse = "OATS";
    
}
let motDePasse = "";

do {
    console.log("Mot de passe incorect");
    motDePasse = ziak();
} while (motDePasse !== "OATS") ;

console.log("Binvenido");


// Pour la boucle for elle utile quand on "sait" combien de fois on va répéter le bloc d'instruction

// La boucle se compose de trois grande partie : "Initialisation"; "Condition de la boucle"; "Incrémentation".
// // Toujours dans cet ordre là : for(Initialisation; Condition; Incrémentation) {}

for(let cristiano = 0; cristiano <= 5; cristiano = cristiano + 1) {
    console.log("Cristiano à " + cristiano + " ballond d'or" );
}

// // exemple : Combien de jour encore tu va aller à l'école
// Si tu log pas la variable il a affichera seulement le nombre de fois que l'action se répètera
// Si tu le log il affichera tout d'un coup

for (let ecole = 5; ecole <= 30; ecole = ecole + 2) {
    console.log("Bientot le Bac");
}




