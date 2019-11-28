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

router.get('/:id?', getUsers);
router.get('/:id/votes', getVotes);
router.post('/', createUser);

module.exports = router;
