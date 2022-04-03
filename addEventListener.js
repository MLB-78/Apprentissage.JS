// addEventListener

// Quand on désigne un évènement avec cette méthode elle se prépare à gérer un évènement sur la balise qu'on a pointé(click,submit...S)
// addEventListener sa prend 2 paramètres
// 1er paramètre c'est l'évènement en question "click"
// 2ème paramètre c'est celui de fonction (en vrai illimited) 

question.addEventListener('click',() =>{

    console.log("Totalement au dédale rue");
    question.style.backgroundColor = 'gray';
    question.style.transition = "1.2s";
    question.style.borderRadius = '125px';


})



