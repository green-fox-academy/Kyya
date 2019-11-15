module.exports = (req, res) => {
  const { input } = req.query;

  if (!input) {
    res.send({ error: 'Please provide an input!' });
  } else {
    res.send({ received: parseInt(input), result: input * 2 });
  }
}
