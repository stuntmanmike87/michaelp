// Déclaration des variables
const bouton = document.getElementById('submit')
const popup = document.getElementById('myPopup')
const close = document.getElementById('closePopup')

// Ouverture de la popup
bouton.addEventListener('click', () => {
  // On affiche la popup
  popup.style = 'display: flex'
})

// Fermeture de la popup
close.addEventListener('click', () => {
  // On masque la popup
  popup.removeAttribute('style')
})
