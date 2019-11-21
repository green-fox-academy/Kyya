require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const messages = require('./routes/messages');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send({
    message: 'Welcome to Chat API server',
    redirect: '/messages'
  })
})

app.get('/messages', messages.getMessage);
app.post('/messages', messages.addMessage);
app.delete('/messages/:id', messages.deleteMessage);

const PORT = process.env.PORT || 4000;
app.listen(PORT, '0.0.0.0', () => console.log(`App listening on ${PORT}`));
