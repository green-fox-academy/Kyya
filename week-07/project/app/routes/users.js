const conn = require('../db');
const { Router } = require('express');
const router = Router();

function createUser(req, res) {
  res.sendStatus(200);
}

function getUser(req, res) {
  res.sendStatus(200);
}

router.get('/', getUser)
router.post('/', createUser);

module.exports = router;
