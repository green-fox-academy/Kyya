const { createConnection } = require('mysql2');

module.exports = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'jsa'
});




