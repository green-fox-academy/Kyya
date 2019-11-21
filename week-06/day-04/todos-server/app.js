const express = require('express');
const app = express();
const todos = require('./routes/todos');

const router = express.Router();
router.get('/todos', todos.getTodo);
router.post('/todos', todos.addTodo);
router.delete('/todos/:id', todos.deleteTodo);
router.put('/todos/:id', todos.updateTodo);

app.use(express.json());
app.use('/api/v1', router);

const PORT = 3000;
app.listen(PORT, 'localhost', () => console.log(`App listening on ${PORT}`));
