// les classses 

// Une classe JavaScript est un type de fonction. 
// Les classes sont déclarées avec le mot-clé class .
// le constructor se déclare comme une fonction sans lui donner de nom

class afrique { 
    
    // Les paramètres du constructor 
    constructor(bu,bu2) {

        console.log(bu + " est plus complet qu'" + bu2 );
        
    }


}

// Les arguments de new afrique vienne des paramètres du constructor
// le constructor c'est la déclaration
// la variable continent c'est l'appelle 

let continent = new afrique ("Benzema","Aubameyang")



// En réalité, les classes sont juste des fonctions spéciales. 
// Ainsi, les classes sont définies de la même façon que les fonctions : par déclaration, ou par expression.

// Les classes JavaScript ont été introduites avec ECMAScript 2015
// Elle fournit uniquement une syntaxe plus simple pour créer des objets et manipuler l'héritage.