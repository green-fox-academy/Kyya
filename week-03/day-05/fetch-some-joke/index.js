const container = document.querySelector('.container');

function clickHandler() {
  fetch('http://api.icndb.com/jokes/random')
    .then(res => res.json())
    .then(res => res.value.joke)
    .then(joke => {
      const p = document.createElement('p');
      p.innerText = joke;
      container.append(p);
      if (container.style.display === 'none') {
        container.style.display = 'block';
      }
    })
}

document.querySelector('.button').addEventListener('click', clickHandler);