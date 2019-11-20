const fakeExpress = require('./lib/fake-express');
const app = fakeExpress();

app.get('/movies', (req, res) => {
  res.send({
    message: 'This is a GET method',
    path: req.path,
    query: req.query
  });
})

app.post('/movies', async (req, res) => {
  const body = await req.body()
  res.send({
    message: 'This is a POST method',
    body: JSON.parse(body)
  });
})

app.delete('/movies', (req, res) => {
  res.sendStatus(204);
})

app.put('/movies', (req, res) => {
  res.send({
    message: 'This is a PUT method',
    params: req.params
  })
})

const PORT = 3000;
app.listen(PORT, () => console.log(`App listening on ${PORT}`))
