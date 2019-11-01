const API_KEY = 'hf5yTe1JnlkOAllzUhElz0hm51MS7jLU';
const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const query = `?q=moon%20landing%20by%20Apollo%2011&api-key=${API_KEY}`;
const container = document.querySelector('.posts');

function createElement(container, item) {
  const article = document.createElement('article');
  article.innerHTML = `
    <span class="time">${new Date(item.pub_date).toLocaleDateString('zh-CN')}</span>
    <a class="title" target="_blank" href="${item.web_url}">${item.headline.main}</a>
    <p>${item.snippet}</p>
  `;
  container.append(article);
}

fetch(`${baseURL}${query}`)
  .then(res => res.json())
  .then(res => res.response)
  .then(res => {
    container.innerHTML = '';
    res.docs.forEach(doc => createElement(container, doc))
  });