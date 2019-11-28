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
  const pid = parseInt(req.params.id);
  if (Number.isNaN(pid)) {
    return res.sendStatus(400);
  }
  try {
    let queryString = 'SELECT * FROM Posts;';
    if (pid) {
      queryString = format('SELECT * FROM Posts WHERE id = ? LIMIT 1;', [pid]);
    }
    const [ posts = [] ] = await conn.query(queryString);
    if (pid && posts.length > 0) {
      return res.send(posts[0]);
    }
    res.send({ posts });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

function createVote(score) {
  return async function(req, res) {
    const pid = parseInt(req.params.id);
    const uid = parseInt(req.body.uid);
    try {
      const queryString = format(`INSERT INTO Votes(pid, uid, score)
      VALUES(?, ?, ?) ON DUPLICATE KEY UPDATE score = score + ?;
      SELECT Posts.* FROM Posts INNER JOIN Votes
      ON(Votes.pid = Posts.id)
      WHERE Posts.id = ? AND Votes.uid = ?`, [ pid, uid, score, score, pid, uid ]);
      const [[,[ post ]]] = await conn.query(queryString);
      res.status(201).send(post);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
}

async function removePost(req, res) {
  const pid = parseInt(req.params.id);
  try {
    const queryString = format(`DELETE FROM Posts WHERE id = ?;`, [pid]);
    const [{ affectedRows }] = await conn.query(queryString);
    if (affectedRows) {
      return res.status(200).send({ id: pid });
    }
    res.sendStatus(422);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

async function getComments(req, res) {
  const pid = parseInt(req.params.id);
  try {
    const queryString = format('SELECT * FROM Comments WHERE pid = ?;', [pid]);
    const [ comments = [] ] = await conn.query(queryString);
    res.send(comments);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

async function createComment(req, res) {
  const pid = parseInt(req.params.id);
  const uid = parseInt(req.body.uid);
  const { text } = req.body;
  const parent = null;
  try {
    const queryString = format(`INSERT INTO
    Comments(pid, uid, parent, text)
    VALUES(?, ?, ?, ?); SELECT * FROM Comments
    WHERE id = LAST_INSERT_ID();`, [pid, uid, parent, text]);
    const [[ { affectedRows }, [ comment ]]] = await conn.query(queryString);
    if (affectedRows) {
      return res.status(201).send(comment);
    }
    res.sendStatus(422);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

router.get('/:id?', getPosts);
router.post('/', createPost);

router.put('/:id/upvote', createVote(1));
router.put('/:id/downvote', createVote(-1));

router.get('/:id/comments', getComments);
router.post('/:id/comments', createComment);
router.delete('/:id', removePost);

module.exports = router;
