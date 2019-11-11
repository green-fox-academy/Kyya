const API_KEY = 'a23b58f0458ea7517ebca6d816dc96d307ecc29efd5f10a6c185f78ab758e516';
const baseURL = `https://api.unsplash.com`;

const headers = { "Authorization": `Client-ID ${API_KEY}` };

export function getRandomPhotos(count = 20) {
  return fetch(`${baseURL}/photos/random?collections=4690903&count=${count}`, { headers })
    .then(res => {
      console.log('Ratelimit-Remaining: ' + res.headers.get('X-Ratelimit-Remaining'))
      return res;
    })
    .then(res=>res.json())
}

export function getPopularPhotos() {
  return fetch(`${baseURL}/photos`, { headers })
  .then(res => {
    console.log('Ratelimit-Remaining: ' + res.headers.get('X-Ratelimit-Remaining'))
    return res;
  })
  .then(res=>res.json())
}
