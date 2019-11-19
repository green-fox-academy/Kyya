const express = require('express');
const books = require('./routes/books');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());

app.get('/books/title', books.getBookTitles);
app.get('/books', books.getBooks);

app.listen(3000, 'localhost', () => {
  console.log('App Listening on 3000.');
})
