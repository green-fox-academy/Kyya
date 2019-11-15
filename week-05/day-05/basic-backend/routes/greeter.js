module.exports = (req, res) => {
  const { name, title } = req.query;
  let result = {};

  if (!name && !title) {
    result = { error: 'Please provide a name and a title!' };
  } else if (name && !title) {
    result = { error: 'Please provide a title!' };
  } else if (!name && title) {
    result = { error: 'Please provide a name!' };
  } else {
    result = { 'welcome_message': `Oh, hi there ${name}, my dear ${title}!` };
  }

  res.send(result);
}
