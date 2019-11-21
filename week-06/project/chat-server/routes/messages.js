const conn = require('../db').promise();
const { format } = require('../utils');

module.exports = {
  getMessage: async (req, res) => {
    try {
      const queryString = 'SELECT * FROM message;';
      const [ messages ] = await conn.query(queryString);
      res.send({ 
        messages,
        count: messages.length
      });
    } catch (error) {
      res.sendStatus(500);
      throw new Error(error.message);
    }
  },
  addMessage: async (req, res) => {
    const { user, text, style } = req.body;
    if (user === undefined || text === undefined) {
      res.sendStatus(400);
      return;
    }
    try {
      const queryString = format('INSERT INTO message SET ?; SELECT * FROM message WHERE id = LAST_INSERT_ID();', { user, text, style: JSON.stringify(style) });
      const [[{ affectedRows }, [ message ]]] = await conn.query(queryString);
      if (affectedRows) {
        res.status(201);
        res.send(message);
        return;
      }
      res.sendStatus(422);
    } catch (error) {
      res.sendStatus(500);
      throw new Error(error.message);
    }
  },
  deleteMessage: async (req, res) => {
    const { id } = req.params;
    try {
      const queryString = format('DELETE FROM message WHERE ?;', { id: parseInt(id) });
      const [{ affectedRows }] = await conn.query(queryString);
      res.sendStatus(affectedRows ? 204 : 404);
    } catch (err) {
      res.sendStatus(500);
      throw new Error(err.message);
    }
  },
}
