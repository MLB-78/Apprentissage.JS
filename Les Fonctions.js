// les fonctions

// Déclaration de la fonction : presenteToi - Ce qui se situe entre parenthèse c'est les paramètres
function presenteToi(prenom,nom,age,taille,poids) {
    console.log(prenom +" " + nom);
    console.log(age + " ans");
    console.log("Mensuration : " + taille + " " + poids);
}


// Appel de la fonction : presenteToi - Ici ce qui se situe entre parenthèse c'est les arguments 
presenteToi("MLB","N.B",18,"1m 85","83 kg");
    


// RETURN 
// Le mot clé "return" permet de retourner une valeur - Attention return doit toujours se situer à la fin de la fonction
// return se comporte vraiment comme une variable sans le égal 
// Je considere personnelement return comme un "Scope Locale" car elle toujours être utilisé dans une fonction

// AVEC VARIABLE

let som;

// déclaration
function multiplication(operande1,operande2) {
    return operande1*operande2;
}

// l'appel de la fonction est situé dans la variable
som = multiplication(5,10);

console.log(som);

// On peut également déclarer une fonction sans paramètres ni argument elles se reconaîtont mais il est préférable de lui en assigné une dès le départ

function bien () {
    console.log("Bion");
}

bien();

// SANS VARIABLE

// déclaration
function soustraction(x,y) {
    return x-y;
}

// l'appel est situé dans l'instruction console.log
console.log(soustraction(10,8));
console.log(soustraction(10,10));

