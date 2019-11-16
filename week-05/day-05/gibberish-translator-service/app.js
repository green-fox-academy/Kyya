const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.json());

app.post('/translate', require('./translate'));

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
