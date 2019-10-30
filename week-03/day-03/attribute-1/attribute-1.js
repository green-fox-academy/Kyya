/*
  Write the image's url to the console.

  Replace the image with a picture of your favorite animal.

  Make the link point to the Green Fox Academy website.

  Disable the second button.
  Replace its text with 'Don't click me!'.
*/
console.log(document.querySelector('img').src);
document.querySelector('img').src = 'https://uploads-ssl.webflow.com/598435743262c800013158eb/5a672d4cda0e5a00018990ee_green_tw.png';

document.querySelector('a').href = 'https://www.greenfoxacademy.com/';

const button = document.querySelector('.this-one');
button.setAttribute('disabled', true);
button.innerText = "Don't click me!";
