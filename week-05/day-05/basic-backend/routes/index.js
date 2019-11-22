const arrays = require('./arrays');
const translate = require('./translate');
const sith = require('./sith');

function generateArray(start, end) {
  return Array.from(new Array(end + 1).keys()).slice(start);
}

module.exports = {
  sith,
  arrays,
  translate,
  doubling: (req, res) => {
    const { input } = req.query;
    const parsed = parseInt(input);
    if (!Number.isNaN(parsed)) {
      res.send({
        received: parsed,
        result: parsed * 2
      });
    } else {
      res.send({ error: 'Please provide an input!' })
    }
  },
  greeter: (req, res) => {
    const { name, title } = req.query;
    if (name && title) {
      res.send({ 'welcome_message': `Oh, hi there ${name}, my dear ${title}!` });
    } else if (name && !title) {
      res.send({ error: 'Please provide a title!' });
    } else if (title && !name) {
      res.send({ error: 'Please provide a name!' });
    } else {
      res.send({ error: 'Please provide a name and a title!' });
    }
  },
  appenda: (req, res) => {
    const { appendable } = req.params;
    if (appendable) {
      res.send({ appended: `${appendable}a` });
      return;
    }
    res.sendStatus(400);
  },
  doUntil: (req, res) => {
    const { until } = req.body;
    const { action } = req.params;
    if (until) {
      switch (action) {
        case 'sum':
          res.send({ result: Number((1 + until) * until / 2) });
          break;
        case 'factor':
          res.send({ result: Number(generateArray(1, until).reduce((a, b) => a * b)) });
          break;
        default:
          res.send({ error: 'Unknown action!' });
      }
    } else {
      res.send({ error: 'Please provide a number!' });
    }
  }
}
