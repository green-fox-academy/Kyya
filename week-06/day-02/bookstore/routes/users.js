const { readFileSync } = require('fs');
const { join } = require('path');
const { format } = require('mysql2');
const conn = require('../db').promise();

async function createUserTable() {
  const buffer = readFileSync(join(__dirname, '..', 'data/user.sql'));
  const queryString = buffer.toString('utf8').trim();
  await conn.query(queryString);
}

function getQueryString(data) {
  return format('INSERT INTO user VALUES(?, ?, ?, ?, ?, ?, ?, ?);', data);
}

module.exports = {
  getUsers: async (req, res) => {
    const queryString = 'SELECT * FROM user;';
    const [ users ] = await conn.query(queryString);
    res.render('user_table', { users });
  },
  importUsers: async (req, res) => {
    if (!req.file) {
      console.error('Missing file field!')
      return req.status(400);
    }
    try {
      const promises = [];
      const data = req.file.buffer.toString('utf8').trim().split(/\r?\n/).slice(1);
      await createUserTable();

      for (let i = 0; i < data.length; i++) {
        const user = data[i].split(',').map((value) => (value === '' ? undefined : value));
        const action = conn.query(getQueryString(user));
        promises.push(action);
      }

      await Promise.all(promises);
      return res.redirect('/users');
    } catch (error) {
      console.error(error);
      if (error.code === 'ER_DUP_ENTRY') {
        return res.redirect('/users');
      }
      res.sendStatus(500);
    }
  }
}
