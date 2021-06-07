let boutonModale = document.getElementById('Suivant');
let BoxModale = document.getElementsByClassName('modale');
let boutonSuivant = document.getElementsByClassName('BoutonModale');


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
