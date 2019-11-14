const express = require('express');
const app = express();

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(3000, () => console.log('App listening on port 3000!'));
