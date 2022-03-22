// Le DOM (Document Object Model) c'est pouvoir manipuler des balises html
// Quand tu vas dans inspecter tu voit directement le DOM l'arborecence du navigateur(head,body...)

// Les sélécteurs

// Si tu fait un document.querySelector('body') dans la console, cela t'affichera les éléments de la console concernés par le body
// Ce sélécteur fonctionne comme du css 

document.querySelector('h2').style.color = "skyblue";

// analysons :   
// document : on parle au DOM
// .querySelector('h2') :va me chercher la balise h2
// /.style : pour injecter du style CSS à notre h2
// ensuite on peut injecter n'importe quelle attribut CSS à notre balise [color,font family,border....] 


// le plus pratique serait de cloisonner notre élément dans une variable. 
// A chaque fois qu'on va séléctionner une balise c'est du const.

const titreSouligné = document.querySelector('h1').style.textDecoration = "underline";

// lisible que dans la console du navigateur
// Juste lire 
const titre = document.querySelector("h1");

console.log(titre);

// mettre à jour un sélécteur
titre.style.color = 'black';


    




