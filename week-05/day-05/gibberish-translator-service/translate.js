module.exports = (req, res) => {
  const { text, lang } = req.body;

  if (lang !== 'en') {
    res.send({ error: 'I can\'t translate that!' });
    return;
  }

  let translated = '';
  for (let i = 0; i < text.length; i++) {
    if ('aeiou'.includes(text[i])) {
      translated += `${text[i]}l`;
    }
    translated += text[i];
  }

  res.send({
    lang: 'gibberish',
    translated
  })
}
