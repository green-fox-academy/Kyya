const express = require('express');
const app = express();
const conn = require('./connection').promise();
const squel = require('squel');

app.set('view engine', 'ejs');
app.use(express.json());

app.get('/books/title', async (req, res) => {
  const [ rows ] = await conn.query('SELECT book_name FROM book_mast;');
  res.render('index', { books: rows });
})

/*
SELECT book_name, aut_name, cate_descrip, pub_name, book_price
FROM book_mast
INNER JOIN author USING(aut_id)
INNER JOIN category USING(cate_id)
INNER JOIN publisher USING(pub_id)
*/
app.get('/books', async (req, res) => {
  const { category, publisher, pgt, plt } = req.query;

  let query = squel
    .select()
    .from('book_mast', 'b')
    .fields(['book_name', 'aut_name', 'cate_descrip', 'pub_name', 'book_price'])
    .join('author', 'a', squel.expr().and('b.aut_id = a.aut_id'))
    .join('category', 'c', squel.expr().and('b.cate_id = c.cate_id'))
    .join('publisher', 'p', squel.expr().and('b.pub_id = p.pub_id'));

  if (category) {
    query = query.where(`cate_descrip = ?`, category);
  }
  if (publisher) {
    query = query.where(`pub_name = ?`, publisher);
  }
  if (pgt) {
    query = query.where(`book_price > ?`, pgt);
  }
  if (plt) {
    query = query.where(`book_price < ?`, plt);
  }

  const [ rows ] = await conn.query(query.toString());
  res.render('table', { books: rows });
})

app.listen(3000, 'localhost', () => {
  console.log('App Listening on 3000.');
})
