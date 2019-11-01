const API_KEY = 'KooiFAGjsMpZiyHJKb13hazC73nB0T7g';
const baseURL = 'http://api.giphy.com/v1/gifs/search';
const container = document.querySelector('.container');
const keyword = document.querySelector("input[name='keyword']");
const search = document.querySelector('button.search');

function createElement(container, data) {
  const card = document.createElement('img');
  card.src = data.images['480w_still'].url;
  card.dataset.src = data.images.preview_webp.url;
  card.onclick = function() {
    this.src = this.dataset.src;
  }
  container.append(card);
}

function request(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        resolve(xhr.responseText);
      }
    }
    xhr.onerror = reject;
  })
}

function searchHandler() {
  const URL = `${baseURL}?api_key=${API_KEY}&q=${keyword.value}&limit=16&offset=10`;
  request(URL)
    .then(res => JSON.parse(res))
    .then(res => {
      container.innerHTML = '';
      res.data.forEach(item => createElement(container, item));
    })
    .catch(err => {
      console.error(err);
    }) 
}

search.addEventListener('click', searchHandler);
