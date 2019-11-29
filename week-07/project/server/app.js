require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { setToken } = require('./helper');
const { users, posts, votes } = require('./routes');

app.use(cors());
app.use(setToken());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.send({ title: 'My App', message: 'Hello, World!' });
});

app.use('/users', users);
app.use('/posts', posts);
app.use('/votes', votes);

app.use(function(error, req, res, next) {
  if (error.name === 'JsonWebTokenError') {
    return res.sendStatus(403);
  }
  console.error(error);
  res.sendStatus(500);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening on ${PORT}`));
