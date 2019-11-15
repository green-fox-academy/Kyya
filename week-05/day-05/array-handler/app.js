const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.json());

app.post('/arrays', (req, res) => {
  const { what, numbers } = req.body;

  let result = { error: "Please provide what to do with the numbers!" };

  if (what && numbers) {
    switch(what) {
      case 'sum':
        result = { result: numbers.reduce((a, b) => a + b)};
        break;
      case 'multiply':
        result = { result: numbers.reduce((a, b) => a * b)};
        break;
      case 'double':
        result = { result: numbers.map(number => number * 2)};
        break;
    }
  }
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
