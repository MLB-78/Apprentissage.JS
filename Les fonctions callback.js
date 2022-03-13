// Les fonctions callback (fonctions de rappels)

// Règle d'or : La déclaration est 


// méthode 1

function football (MC,ATT) {

    console.log(" - FC Barcelone");
    MC();

    console.log("-----------------------");

    console.log(" - Real Madrid");
    ATT();

}


    joueursBarça = () => {

        console.log("Andrès Iniesta");
        console.log("Arda Turan");

    }
    
    joueursReal = () => {
    
        console.log("Karim Benzema");
        console.log("Vinicùs");
    
    };

    // L'appel de la fonction
football(joueursBarça,joueursReal);


// La fonction football c'est notre base dans laquelle on va mettre toutes nos rappelles de fonctions
// On créer 2 paramètres qui sont : MC et ATT 
// En dehors de football on créer 2 autres fonctions  : joueursBarça et joueursReal.
// Qui va contenir tous les joueurs cités
// On vient mettre nos fonctions callback en arguments de notre fonctions football
// Et on vient appellé MC et ATT comme des appelles de fonctions 



