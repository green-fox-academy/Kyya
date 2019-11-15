function generateArray(start, end) {
  return Array.from(new Array(end + 1).keys()).slice(start);
}

module.exports = (req, res) => {
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
    }
  } else {
    res.send({ error: 'Please provide a number!' });
  }
}
