const conn = require('../db').promise();
const { format } = require('mysql2');
const { Router } = require('express');
const router = Router();

async function createPost(req, res) {
  const { title, url } = req.body;
  if (!title || !url) {
    return res.sendStatus(400);
  }
  try {
    const queryString = format(`INSERT INTO Posts SET ?;
    SELECT * FROM Posts WHERE id = LAST_INSERT_ID();`, { title, url });
    const [[{ affectedRows }, [ post ]]] = await conn.query(queryString);
    if (affectedRows) {
      return res.status(201).send(post);
    }
    res.sendStatus(422);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

async function getPosts(req, res) {
  try {
    const queryString = 'SELECT * FROM Posts;'
    const [ posts = [] ] = await conn.query(queryString);
    res.send({ posts });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

function createVote(score) {
  return async function(req, res) {
    const { id } = req.params;
    const { uid } = req.body;
    try {
      const queryString = format(`CALL CreateVote(?, ?, ?);`, [ parseInt(uid), parseInt(id), score ]);
      const [[[ post ]]] = await conn.query(queryString);
      res.status(201).send(post);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        return res.status(422).send({
          message: 'You have voted this post.'
        });
      }
      console.error(error);
      res.sendStatus(500);
    }
  }
}

function removePost(req, res) {
  res.sendStatus(200);
}

router.get('/', getPosts);
router.post('/', createPost);
router.put('/:id/upvote', createVote(1));
router.put('/:id/downvote', createVote(-1));
router.delete('/:id', removePost);
module.exports = router;
