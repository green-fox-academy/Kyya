require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { users, posts, votes } = require('./routes');

app.use(cors());
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
