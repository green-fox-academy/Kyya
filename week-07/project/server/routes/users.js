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
    const queryString = format('INSERT INTO Users SET ?; SELECT * FROM Users WHERE id = LAST_INSERT_ID();', { name, email });
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

function getUser(req, res) {
  res.sendStatus(200);
}

router.get('/', getUser);
router.post('/', createUser);

module.exports = router;
