/*
  Add an item that says 'The Green Fox' to the asteroid list.

  Add an item that says 'The Lamplighter' to the asteroid list.

  Add a heading saying 'I can add elements to the DOM!' to the .container.

  Add an image, any image, to the container.
*/

function addListItem(target, text) {
  const li = document.createElement('li');
  li.innerText = text;
  target.append(li);
}

const target = document.querySelector('.asteroids');
addListItem(target, 'The Green Fox');
addListItem(target, 'The Lamplighter');

const heading = document.createElement('h1');
heading.innerText = 'I can add elements to the DOM!';
document.querySelector('.container').append(heading);

const img = document.createElement('img');
img.src = 'https://static.wixstatic.com/media/f4461b_83457ca5dd844c71a760d36e6583d0ff.png/v1/fill/w_168,h_168,al_c,usm_0.66_1.00_0.01/f4461b_83457ca5dd844c71a760d36e6583d0ff.png';
document.querySelector('.container').append(img);
