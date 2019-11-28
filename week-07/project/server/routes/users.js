const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const conn = require('../db').promise();
const { format } = require('mysql2');
const { Router } = require('express');
const router = Router();

async function createUser(req, res) {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.sendStatus(400);
  }
  try {
    const queryString = format(`INSERT INTO Users SET ?;
    SELECT * FROM Users WHERE id = LAST_INSERT_ID();`, { name, email });
    const [[{ affectedRows }, [ user ]]] = await conn.query(queryString);
    if (affectedRows) {
      return res.status(201).send(user);
    }
    res.sendStatus(422);
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(422).send({
        message: 'user has exists'
      });
    }
    console.error(error);
    res.sendStatus(500);
  }
}

async function getUsers(req, res) {
  const uid = parseInt(req.params.id);
  if (Number.isNaN(uid)) {
    return res.sendStatus(400);
  }
  try {
    let queryString = 'SELECT * FROM Users;';
    if (uid) {
      queryString = format('SELECT * FROM Users WHERE id = ?', [uid]);
    }
    const [ users = [] ] = await conn.query(queryString);
    if (users.length === 0) {
      return res.sendStatus(404);
    }
    if (uid) {
      return res.send(users[0]);
    }
    res.send({ users });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

async function getVotes(req, res) {
  const uid = parseInt(req.params.id);
  try {
    const queryString = format(`SELECT * FROM Votes WHERE uid = ?;`, [uid]);
    const [ votes ] = await conn.query(queryString);
    res.send(votes);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

async function loginUser(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.sendStatus(400);
  }
  try {
    const queryString = format('SELECT * FROM Users WHERE name = ? LIMIT 1;', [username.toLowerCase()])
    const [ users = [] ] = await conn.query(queryString);
    if (users.length > 0) {
      const [ user ] = users;
      const hash = crypto.createHmac('sha256', process.env.JWT_PRIVATE_KEY)
      .update(password)
      .digest('hex');
      if (user.password === hash) {
        const token = await jwt.sign({ user }, process.env.JWT_PRIVATE_KEY);
        const { id, name, email } = user;
        return res.send({ user: { id, name, email, token } });
      } else {
        return res.status(400).send({ message: 'Wrong password' });
      }
    } else {
      return res.status(404).send({ message: 'User not exists. Please register...' });
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

async function getUserDetails(req, res) {
  try {
    res.send({ token: req.token });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

async function registerUser(req, res) {
  const { username, email, password } = req.body;
  if (!username || !password) {
    return res.sendStatus(400);
  }
  try {
    const hash = crypto.createHmac('sha256', process.env.JWT_PRIVATE_KEY)
      .update(password)
      .digest('hex');
    const queryString1 = format('SELECT * FROM Users WHERE name = ?;', [username.toLowerCase()]);
    const [ user = [] ] = await conn.query(queryString1);
    if (user.length > 0) {
      return res.send({ message: 'User has exists!' });
    } else {
      const queryString2 = format(`INSERT INTO Users(name, password, email)
      VALUES(?, ?, ?);`, [username, hash, email]);
      const [{ affectedRows }] = await conn.query(queryString2);
      if (affectedRows) {
        return res.sendStatus(201);
      }
      res.sendStatus(422);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

router.post('/', createUser);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/my', getUserDetails);

router.get('/:id?', getUsers);
router.get('/:id/votes', getVotes);

module.exports = router;
