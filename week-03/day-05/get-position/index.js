const baseURL = 'https://www.google.com/maps/embed/v1/place';
const G_API_KEY = 'AIzaSyAS-HpV459V-m1VsG_Zkbt2sdTeZpF9nOA';
const IP = document.querySelector("input[name='ip']");
const IP_API_KEY = 'c72db3208752ab891680e21934a3f1f6';

function getCityByIP(ip) {
  return fetch(`http://api.ipapi.com/${ip}?access_key=${IP_API_KEY}&format=1`)
    .then(res => res.json())
    .then(res => res.city);
}

function clickHandler(ev) {
  ev.preventDefault();
  getCityByIP(IP.value)
    .then(city => {
      document.querySelector('iframe').src = `${baseURL}?key=${G_API_KEY}&q=${city}`
    });
}

document.querySelector('.lookup').addEventListener('click', clickHandler);