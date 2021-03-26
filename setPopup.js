//declaring variables
function setPopup() {
  const bouton = document.getElementById('submit');
  const popup = document.getElementById('myPopup');
  const close = document.getElementById('closePopup');

  // open popup
  bouton.addEventListener('click', () => {
    // display popup
    popup.style = 'display: flex';
  });

  // close popup
  close.addEventListener('click', () => {
    // mask popup
    popup.removeAttribute('style');
  });
}
