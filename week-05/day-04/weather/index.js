const express = require('express');
const forecasts = require('./data');
const app = express();
const PORT = 3000;

app.use('/static', express.static('assets'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { forecasts });
});

app.get('/city/:name/details', (req, res) => {
  const city = req.params.name;
  const details = forecasts.filter(forecast => city === forecast.city.toLowerCase());

  if (details.length >= 1) {
      res.render('details', { details: details[0] });
  } else {
    res.sendStatus(404);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
