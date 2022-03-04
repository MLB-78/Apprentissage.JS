// Exercice 0
// L'objectif de cet exercice est de vous familiariser 
// avec l'environnement du Coding Dojo.
// Vous devez créer une fonction qui renvoie Coding Dojo (utilisez le mot-clé return).

teteDur = (s) => {
    return console.log("Coding Dojo" + s);
}

teteDur(" Me voila");

// Exercice 1
// L'objectif de cet exercice est de créer une fonction permettant de renvoyer le mot correspondant au chiffre passé en argument.

// Les valeurs d'entrées sont les chiffres de 0 à 2 inclu.

// Exemples
// Pour le chiffre 0, la fonction doit renvoyer zéro
// Pour le chiffre 1, la fonction doit renvoyer un
// Pour le chiffre 2, la fonction doit renvoyer deux


idf = (zero,un,deux) => {

    if (zero === 0) {
        console.log(zero);
    } 
    if (un === 1) {
        console.log(un);
    }

    if (deux === 2) {
        console.log(deux);
    }
    

} 

idf(0,1,2)

//Exercice 2
// Étant donné un prénom prenom, la fonction doit renvoyer Un pour <prenom>, un pour moi..
// Si aucun prénom n'est donné, la fonction doit renvoyer Un pour toi, un pour moi..
// Exemples
// Pour le prénom Tom, la fonction doit renvoyer Un pour Tom, un pour moi.
// Pour le prénom Alice, la fonction doit renvoyer Un pour Alice, un pour moi.
// Si aucun prénom n'est fourni, la fonction doit renvoyer Un pour toi, un pour moi.
// Donc soit tu met l'opérateur d'égalité stricte, soit celui d'inégalité stricte

blaz = () => { 

    let tom = "Un pour Tom " +  ", un pour moi.";
    let alice = "Un pour Alice " +", un pour moi."


    if (tom && alice === undefined){

        console.log("Un pour toi, un pour moi.");

    } else {
        console.log(tom);
        console.log(alice);
    }




}

blaz();