const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', require('./routes/doubling'));
app.get('/greeter', require('./routes/greeter'));
app.get('/appenda/:appendable', require('./routes/appenda'));
app.post('/dountil/:action', require('./routes/dountil'));

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
