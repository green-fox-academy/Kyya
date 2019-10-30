/*
  If the fourth p has a 'dolphin' class, replace apple's content with 'pear'

  If the first p has an 'apple' class, replace cat's content with 'dog'

  Make apple red by adding a .red class

  Make balloon less balloon-like (change its shape)
*/

if (document.querySelector('p:nth-child(4)').classList.contains('dolphin')) {
  document.querySelector('p.apple').innerText = 'pear';
}

if (document.querySelector('p:first-child').classList.contains('apple')) {
  document.querySelector('.cat').innerText = 'dog';
}

document.querySelector('.apple').classList.add('red');

document.querySelector('.balloon').style.borderRadius = '0';
