/*
    1)  Fill every paragraph with the last one's content.
    2)  Do the same again, but you should keep the cat strong.
*/
const animalsText = document.querySelector('p.animals').innerText;
const animalsHTML = document.querySelector('p.animals').innerHTML;

document.querySelectorAll('p').forEach(p => {
  p.innerText = animalsText;
})

document.querySelectorAll('p').forEach(p => {
  p.innerHTML = animalsHTML;
})