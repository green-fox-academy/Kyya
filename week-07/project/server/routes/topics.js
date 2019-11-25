const conn = require('../db');
const { Router } = require('express');
const router = Router();

function createTopic(req, res) {
  res.sendStatus(200);
}

function getTopic(req, res) {
  res.sendStatus(200);
}

router.get('/', getTopic)
router.post('/', createTopic);

module.exports = router;
