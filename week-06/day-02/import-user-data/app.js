const conn = require('./connection').promise();
const { readFileSync } = require('fs');

function doParse(filepath) {
  const dataOfUsers = readFileSync(filepath).toString();
  return dataOfUsers.split('\n').slice(1)
  .map(userString => userString.split(','))
}

function doInsert(userArray) {
  return conn.query('INSERT INTO user VALUES(?, ?, ?, ?, ?, ?, ?, ?);', userArray);
}

function doClear() {
  return conn.query('TRUNCATE TABLE user;');
}

const users = doParse(__dirname + '/data/user.csv');
// console.log(users);

// doClear().then(() => console.log('[INFO] Finished clear request.'));

Promise.all(users.map(doInsert))
  .then(() => console.log('[INFO] Finished all insert request.'))
  .catch(err => console.log('[ERROR]', err.message))
