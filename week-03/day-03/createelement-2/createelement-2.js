/*
  Remove the king from the list.

  Fill the list based on the following list of objects.
  Only add the asteroids to the list.
  Each list item should have its category as a class and its content as text content. -->
*/

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

const addElementItem = target => data => {
  const li = document.createElement('li');
  li.className = data.category;
  li.innerText = data.content;
  target.append(li);
};

const ul = document.querySelector('.asteroids');
ul.removeChild(ul.firstElementChild);

const addListItem = addElementItem(ul);

planetData.filter(i => i.asteroid).forEach(addListItem);
