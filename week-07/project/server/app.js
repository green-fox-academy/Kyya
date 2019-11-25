require('dotenv').config();
const express = require('express');
const app = express();
const { users, posts, topics } = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.render('index', { title: 'My App', message: 'Hello, World!' });
});

app.use('/users', users);
app.use('/topics', topics);
app.use('/posts', posts);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening on ${PORT}`));
