const keyword = document.querySelector("input[name='name']");
const search = document.querySelector(".search");
const baseURL = 'https://swapi.co/api/people';

const actors = document.querySelector('.actors');
const films = document.querySelector('.films');

function createActorElement(container, item) {
  const li = document.createElement('li');
  li.innerText = item.name;
  li.onclick = () => liClickHandler(item);
  container.append(li);
}

function createFilmElement(container, item) {
  const li = document.createElement('li');
  li.innerHTML = `<a href="${item.url}" target="_blank">${item.title}(${item.release_date})</a>`;
  container.append(li);
}

function requestFilm(url) {
  return fetch(url).then(res=>res.json())
}

function liClickHandler(item) {
  films.innerHTML = '<li>Loading...</li>';
  const promises = item.films.map(url => requestFilm(url));
  Promise.all(promises)
    .then(res => {
      films.innerHTML = '';
      res.forEach(item => createFilmElement(films, item));
    })
}

function searchHandler(ev) {
  ev.preventDefault();
  const query = `?search=${keyword.value}`;
  fetch(`${baseURL}${query}`)
    .then(res => res.json())
    .then(res => {
      actors.innerHTML = '';
      document.querySelector('.info').style.display= 'flex';
      if (res.results.length != 0) {
        res.results.forEach(item => createActorElement(actors, item))
      } else {
        actors.innerHTML = 'Nothing.';
      }
    })
}

search.addEventListener('click', searchHandler);
