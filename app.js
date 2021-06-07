let boutonModale = document.getElementById('Suivant');
let boutonModalePrologue = document.querySelector('.prologue');
let modalBg = document.querySelector('.modale-bg');

boutonModale.addEventListener('click',function(){
	modalBg.classList.remove('bg-active')
})
boutonModalePrologue.addEventListener('click',function(){
	modalBg.classList.add('bg-active')
})


function changeText()
{
  boutonModale.textContent = "Lire 2021";
  
};
function normalText(){
	boutonModale.textContent = "Suivant";
};
