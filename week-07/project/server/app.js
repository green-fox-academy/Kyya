require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { users, posts, votes } = require('./routes');

const checkToken = (req, res, next) => {
  const header = req.headers['authorization'];
  if(typeof header !== 'undefined') {
    const bearer = header.split(' ');
    const token = bearer[1];
    req.token = token;
  }
  next();
}

app.use(cors());
app.use(checkToken);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.send({ title: 'My App', message: 'Hello, World!' });
});

app.use('/users', users);
app.use('/posts', posts);
app.use('/votes', votes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening on ${PORT}`));
