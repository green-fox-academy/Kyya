const conn = require('../db');
const { Router } = require('express');
const router = Router();

function createPost(req, res) {
  res.sendStatus(200);
}

function getPost(req, res) {
  res.sendStatus(200);
}

router.get('/', getPost)
router.post('/', createPost);

module.exports = router;
