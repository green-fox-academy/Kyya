const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.json());

function translate(text) {
  return text.split(' ').map(word => {
    let i = Math.floor(Math.random() * word.length);
    return word.substr(0, i) + 'bla' + word.substr(i);
  }).join(' ');
}

app.post('/translate', (req, res) => {
  const { text } = req.body;
  if (text) {
    res.send({
      "translated": translate(text),
      "lang": "gibberish"
    })
  } else {
    res.send({ error: "I can't translate that!" })
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
