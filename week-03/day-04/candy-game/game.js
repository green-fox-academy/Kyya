// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.

// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy production rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

let candies = 90;
let lollypops = 9;
let rate = 1000;

const candiesElement = document.querySelector('.candies');
const lollypopsElement = document.querySelector('.lollypops');
const speedElement = document.querySelector('.speed');
render();


function handler() {
  if (lollypops >= 10) {
    candies += Math.ceil(lollypops * 0.1);
    render();
  }
}
let timer = setInterval(handler, rate);

function render() {
  candiesElement.innerText = candies;
  lollypopsElement.innerText = '🍭'.repeat(lollypops);
  if (lollypops >= 10) {
    speedElement.innerText = lollypops / (rate * 0.01);
  }
}

document.querySelector('.create-candies').onclick = function() {
  candies += 1;
  render();
}

document.querySelector('.buy-lollypops').onclick = function() {
  if (candies >= 100) {
    lollypops += 1;
    candies -= 100;
    render();
  } else {
    alert('100 candies = 1 lollypop');
  }
}

document.querySelector('.candy-machine').onclick = function() {
  rate /= 10;
  rate = Math.max(rate, 1);
  if (timer) {
    clearInterval(timer);
    timer = setInterval(handler, rate);
  }
}

