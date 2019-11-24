require('dotenv').config();
const express = require('express');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const books = require('./routes/books');
const users = require('./routes/users');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());

app.get('/books/title', books.getBookTitles);
app.get('/books', books.getBooks);
app.get('/users', users.getUsers);
app.post('/users', upload.single('csv'), users.importUsers);

app.listen(3000, 'localhost', () => {
  console.log('App Listening on 3000.');
})
