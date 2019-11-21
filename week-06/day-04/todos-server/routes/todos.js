const conn = require('../db').promise();
const { format } = require('../utils');

module.exports = {
  getTodo: async (req, res) => {
    const [ todos ] = await conn.query('SELECT * FROM todo;');
    res.send({ todos });
  },
  addTodo: async (req, res) => {
    const { text, done = false } = req.body;
    if (!text) {
      res.sendStatus(400);
      return;
    }
    try {
      const queryString = format('INSERT INTO todo(text, done) VALUES(?, ?);', [text, done]);
      const [{ affectedRows }] = await conn.query(queryString);
      res.sendStatus(affectedRows ? 201 : 422);
    } catch (err) {
      res.sendStatus(500);
      throw new Error(err.message);
    }
  },
  deleteTodo: async (req, res) => {
    const { id } = req.params;
    try {
      const queryString = format('DELETE FROM todo WHERE ?;', { id: parseInt(id) });
      const [{ affectedRows }] = await conn.query(queryString);
      res.sendStatus(affectedRows ? 204 : 404);
    } catch (err) {
      res.sendStatus(500);
      throw new Error(err.message);
    }
  },
  updateTodo: async (req, res) => {
    const { id } = req.params;
    const { text, done } = req.body;
    if (!text || !done) {
      res.sendStatus(400);
      return;
    }
    try {
      const queryString = format('UPDATE todo SET ? WHERE ?', [{ text, done }, { id: parseInt(id) }]);
      console.log(queryString);
      const [{ affectedRows }] = await conn.query(queryString);
      res.sendStatus(affectedRows ? 200 : 404);
    } catch (err) {
      res.sendStatus(500);
      throw new Error(err.message);
    }
  }
}
