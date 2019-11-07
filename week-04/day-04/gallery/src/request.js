const API_KEY1 = '4e8523c267bc63b72065737ec5eb51dd1f9c5bdf9e01ca9316472a7f069fce4a';
const API_KEY2 = 'a23b58f0458ea7517ebca6d816dc96d307ecc29efd5f10a6c185f78ab758e516';
const baseURL = `https://api.unsplash.com`;

const headers = { "Authorization": `Client-ID ${API_KEY2}` };

export function getRandomPhotos() {
  return fetch(`${baseURL}/photos/random?collections=4690903&count=7`, { headers })
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
