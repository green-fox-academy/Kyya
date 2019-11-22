const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', routes.doubling);
app.get('/greeter', routes.greeter);
app.get('/appenda/:appendable', routes.appenda);
app.post('/dountil/:action', routes.doUntil);
app.post('/arrays', routes.arrays);
app.post('/translate', routes.translate);
app.post('/sith', routes.sith);

app.listen(PORT, () => console.log(`App listening on ${PORT}`));
