const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;


function generateArray (start, end) {
  return Array.from(new Array(end + 1).keys()).slice(start);
}

app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  const { input } = req.query;
  if (input) {
    res.json({ received: parseInt(input), result: input * 2 });
  } else {
    res.json({ error: 'Please provide an input!' });
  }
});

app.get('/greeter', (req, res) => {
  const { name, title } = req.query;
  if (name && title) {
    res.json({ 'welcome_message': `Oh, hi there ${name}, my dear ${title}!` });
  } else if (name && !title) {
    res.json({ error: 'Please provide a title!' });
  } else if (!name && title) {
    res.json({ error: 'Please provide a name!' });
  }
  res.json({ error: 'Please provide a name and a title!' })
});

app.get('/appenda/:appendable', (req, res) => {
  const { appendable } = req.params;
  if (appendable) {
    res.json({ appended: `${appendable}a` });
  }
  res.sendStatus(404);
});

app.post('/dountil/:action', (req, res) => {
  const { until } = req.body;
  const { action } = req.params;
  if (until) {
    if (action === 'sum') {
      res.json({ 
        result: Number((1 + until) * until / 2) 
      });
    } else if (action === 'factor') {
      res.json({
        result: Number(generateArray(1, until).reduce((a, b) => a * b))
      });
    }
  }
  res.json({ error: 'Please provide a number!' })
});


app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
