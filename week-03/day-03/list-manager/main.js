const container = document.createElement('div');
container.style.display = 'flex';

const items = [
  'bread', 'milk', 'orange', 'tomato'
];

const itemHandler = function() {
  this.style.backgroundColor = '#cdcdcd';
}

const inbox = document.createElement('ul');
items.forEach(item => {
  const li = document.createElement('li');
  li.innerText = item;
  li.onclick = itemHandler;
  inbox.append(li);
})
container.append(inbox);

const buttonGroup = document.createElement('div');
buttonGroup.style.width = '128px';
buttonGroup.style.padding = '0 20px';
buttonGroup.style.display = 'flex';
buttonGroup.style.flexDirection = 'column';
const upButton = document.createElement('button');
upButton.innerText = 'UP';
upButton.onclick = function() {}
buttonGroup.append(upButton);

const nextButton = document.createElement('button');
nextButton.innerText = '>';
nextButton.onclick = function() {}
buttonGroup.append(nextButton);

const delButton = document.createElement('button');
delButton.innerText = 'X';
delButton.onclick = function() {}
buttonGroup.append(delButton);

const downButton = document.createElement('button');
downButton.innerText = 'DOWN';
downButton.onclick = function() {}
buttonGroup.append(downButton);

container.append(buttonGroup);

const outbox = document.createElement('ul');
container.append(outbox);

document.body.append(container);