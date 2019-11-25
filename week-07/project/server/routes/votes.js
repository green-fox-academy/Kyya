const conn = require('../db').promise();
const { Router } = require('express');
const router = Router();

async function getVotes(req, res) {
  try {
    const queryString = `SELECT Votes.id, name, type, title FROM Votes
    INNER JOIN Users ON(Votes.uid = Users.id)
    INNER JOIN Posts ON(Votes.pid = Posts.id);`;
    const [ rows ] = await conn.query(queryString);
    res.send(rows);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

router.get('/', getVotes);

module.exports = router;




