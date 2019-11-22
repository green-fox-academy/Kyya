module.exports = (req, res) => {
  const { text, lang } = req.body;

  if (lang !== 'en') {
    res.send({ error: 'I can\'t translate that!' });
    return;
  }

  const translated = text.split('')
    .map(char => 'aeiou'.includes(char) ? `${char}l${char}` : char)
    .join('');

  res.send({
    lang: 'gibberish',
    translated
  })
}
