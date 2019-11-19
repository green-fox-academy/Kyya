const express = require('express');
const app = express();
const conn = require('./connection').promise();

app.set('view engine', 'ejs');
app.use(express.json());

app.get('/books/title', async (req, res) => {
  const [ rows ] = await conn.query('SELECT book_name FROM book_mast;');
  res.render('index', { books: rows });
})

app.get('/books/list', async (req, res) => {
  const [ rows ] = await conn.query('SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author USING(aut_id) INNER JOIN category USING(cate_id) INNER JOIN publisher USING(pub_id);');
  res.render('table', { books: rows });
})

app.listen(3000, 'localhost', () => {
  console.log('App Listening on 3000.');
})
