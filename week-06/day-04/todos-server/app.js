const express = require('express');
const app = express();
const todos = require('./routes/todos');
const cors = require('cors');

const router = express.Router();
router.get('/todos', todos.getTodo);
router.post('/todos', todos.addTodo);
router.delete('/todos/:id', todos.deleteTodo);
router.put('/todos/:id', todos.updateTodo);

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send({
    message: 'Welcome to API server',
    redirect: '/api/v1',
    resources: [
      'todos'
    ]
  })
})
app.use('/api/v1', router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, '0.0.0.0', () => console.log(`App listening on ${PORT}`));
