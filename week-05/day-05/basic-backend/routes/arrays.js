module.exports = (req, res) => {
  const { what, numbers } = req.body;

  if (!Array.isArray(numbers)) {
    res.sendStatus(400);
    return;
  }

  if (what) {
    switch (what) {
      case 'sum':
        res.send({ result: numbers.reduce((a, b) => a + b) })
        break;
      case 'multiply':
        res.send({ result: numbers.reduce((a, b) => a * b) });
        break;
      case 'double':
        res.send({ result: numbers.map(number => number * 2) });
        break;
      default:
        res.send({ error: "Unknown type" });
    }
  } else {
    res.send({ error: "Please provide what to do with the numbers!" });
  }
}
