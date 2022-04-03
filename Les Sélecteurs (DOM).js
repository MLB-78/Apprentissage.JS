// Le DOM (Document Object Model) c'est pouvoir manipuler des balises html ou du stlye CSS
// Quand tu vas dans inspecter tu voit directement le DOM l'arborecence du navigateur(head,body...)

// LES SELECTEURS


// Si tu fait un document.querySelector('body') dans la console, cela t'affichera les éléments de la console concernés par le body
  

// ----------------------------------------------------------------------------------------------------------------------

document.querySelector('h2').style.color = "skyblue";

// analysons :   
//          document : on parle au DOM
//          .querySelector('h2') :va me chercher la balise h2
//          .style : pour injecter du style CSS à notre h2
//          Ensuite on peut injecter n'importe quelle attribut CSS à notre balise [color,font family,border....] 
//          Puis on met la valeur entre guillemet.


// ----------------------------------------------------------------------------------------------------------------------


// le plus pratique serait de cloisonner notre élément dans une variable. 
// On pourra la réutiliser par la suite 
// A chaque fois qu'on va séléctionner une balise c'est du const.

const titreSouligné = document.querySelector('h1').style.textDecoration = "underline";



// ----------------------------------------------------------------------------------------------------------------------


// séléctionner une balise normalement
const titre = document.querySelector("h1");


// mettre à jour un sélécteur (autant de fois qu'on veut)
titre.style.color = 'black';

// ----------------------------------------------------------------------------------------------------------------------

// .Quizz

// Pour séléctionner une "div class" il faut toujours mettre un "." avant comme le css
const questionnaire = document.querySelector(".Quizz");
console.log(questionnaire);

// ----------------------------------------------------------------------------------------------------------------------

// addEventListener (click Events = évènement clique)

// Quand on désigne un évènement avec cette méthode elle se prépare à gérer un évènement sur la balise qu'on a pointé : ici le click
// addEventListener sa prend 2 paramètres
// 1er paramètre c'est l'évènement en question "click"
// 2ème paramètre c'est celui de fonction (en vrai illimited) 



// // on peut également le faire dans le CSS pour que sa soit moins long

questionnaire.addEventListener('click', () => {

    questionnaire.classList.add('modif-1');

}); 

// ----------------------------------------------------------------------------------------------------------------------
// document.getElementById('') : pour séléctioner un ID en l'occurence les boutons

// les boutons 
const shisui = document.getElementById('r1');
const itachi = document.getElementById('r2');
const question1 = document.querySelector('.Quest1');


// les réponses
const bonneRéponse = document.querySelector('p');



shisui.addEventListener('click', () => {

    bonneRéponse.classList.add('show-1');
    
});

itachi.addEventListener('click', () => {
    
    bonneRéponse.classList.add('show-2');
    
     
});

// ----------------------------------------------------------------------------------------------------------------------

// MOUSSE EVENTS : Connaître la souris


const mousemove = document.querySelector(".Souris");

// Dans l'arborescnce du DOM en réalité celui qui se trouve au dessus de tout les autres c'est le "window"
// Pour connaître le nombre de micro-mouvement d'une souris
// Ici dans cet évènement le paramètre "e" qui signifie events sert à reccueilir toute les information
// de notre souris (où elle était à quel heure) 

// window.addEventListener('mousemove', (e) => {

//    console.log(e);

// });

// Le target sert à voir ce que tu cibles 
// window.addEventListener('mousemove', (e) => {

//     console.log(e.target);
 
//  })
 
 
 window.addEventListener('mousemove', (e) => {

    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + 'px';
 
 })
 
 
 



