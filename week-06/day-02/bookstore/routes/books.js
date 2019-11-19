const conn = require('../connection').promise();

const mapOfQuery = {
  category: 'cate_descrip = ?',
  publisher: 'pub_name = ?',
  pgt: 'book_price > ?',
  plt: 'book_price < ?'
}

const authQuery = Object.keys(mapOfQuery);

const getAuthQuery = (query) => Object.keys(query)
  .filter(item => authQuery.includes(item))
  .reduce((obj, key) => ({ ...obj, [key]: query[key] }), {});

function getQueryString(query) {
  const baseSQL = `SELECT
  book_name as title,
  aut_name as author,
  cate_descrip as category,
  pub_name as publisher,
  book_price as price FROM book_mast
  INNER JOIN author USING(aut_id)
  INNER JOIN category USING(cate_id)
  INNER JOIN publisher USING(pub_id)`;

  const keysOfQuery = Object.keys(query);

  if (keysOfQuery.length > 0) {
    const conditions = keysOfQuery.map(item => mapOfQuery[item]);
    return `${baseSQL} WHERE ${conditions.join(' AND ')};`;
  }

  return `${baseSQL};`;
}

module.exports = {
  getBookTitles: async (req, res) => {
    try {
      const [ books ] = await conn.query('SELECT book_name as title FROM book_mast;');
      res.render('book_titles', { books });
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
  getBooks: async (req, res) => {
    const query = getAuthQuery(req.query);
    const queryString = getQueryString(query);

    try {
      const [ books ] = await conn.query(queryString, Object.values(query));
      res.render('book_table', { books });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}
