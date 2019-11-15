module.exports = (req, res) => {
  const { appendable } = req.params;
  if (appendable) {
    res.send({ appended: `${appendable}a` });
  } else {
    res.sendStatus(404);
  }
}
