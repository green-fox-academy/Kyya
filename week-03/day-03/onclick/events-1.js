
/*
  Turn the party on and off by clicking the button. (the whole page)
*/

document.querySelector('button').onclick = function() {
  this.parentNode.classList.toggle('party');
}