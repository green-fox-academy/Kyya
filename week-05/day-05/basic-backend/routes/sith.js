const things = ['Arrgh.', 'Uhmm.', 'Err..err.err.', 'Hmmm.'];

function getRandomThings() {
  return [...Array(Math.ceil(Math.random() * 2))]
    .map(() => things[Math.floor(Math.random() * things.length)]).join(' ');
}

function getYoda(sentence) {
  const array = sentence.split(' ');
  for (let i=0; i < array.length - 1; i+=2) {
    [array[i], array[i+1]] = [array[i+1], array[i]];
  }
  array[0] = array[0].substr(0, 1).toUpperCase() + array[0].substr(1);
  array[array.length-1] += '. ';
  array[array.length-1] += getRandomThings();
  return array.join(' ');
}

function converter(text) {
  return text.split('. ')
    .map(sentence => sentence.toLowerCase().replace('.', ''))
    .map(getYoda)
    .join(' ');
}

module.exports = (req, res) => {
  const { text } = req.body;
  if (text) {
    res.send({ 'sith_text': converter(text) });
  } else {
    res.send({ error: 'Feed me some text you have to, padawan young you are. Hmmm.' });
  }
};
