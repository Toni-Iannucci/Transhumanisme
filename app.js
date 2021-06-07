let boutonModale = document.getElementById('Suivant');
let BoxModale = document.getElementsByClassName('modale');
let boutonSuivant = document.getElementsByClassName('BoutonModale');
let footerAccueil = document.getElementsByClassName('footerAccueil');
let footerChapitreUn = document.getElementsByClassName('footerAccueil');
let footerChapitreDeux = document.getElementsByClassName('footerAccueil');
let footerChapitreTrois = document.getElementsByClassName('footerAccueil');


function toggleClass(){
	BoxModale.style.display = "flex";
};
function changeText()
{
  boutonModale.textContent = "Lire 2021";
  
};
function normalText(){
	boutonModale.textContent = "Suivant";
};
