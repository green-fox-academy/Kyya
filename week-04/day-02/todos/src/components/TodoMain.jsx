import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TodoInputer from './TodoInputer';
import TodoList from './TodoList';

const defaultTodos = [
  'Wake up',
  'Do some work',
  'Make slides for demo',
  'Prepare for demo',
  'Rehearse',
  'Nail it'
]

export default function TodoMain(props) {
  const [ todos, setTodos ] = useState(defaultTodos.map(item=>({ text: item, completed: false})));
  const theme = props.match.params.name;

  useEffect(() => {
    document.body.classList.add(`theme-${theme}`);
    return () => document.body.classList.remove(`theme-${theme}`);
  })

  function handleAction(text) {
    if (text !== '' && !todos.map(item=>item.text).includes(text)) {
      addTodo(text);
    }
  }

  function addTodo(text) {
    setTodos([ ...todos, { text, completed: false } ])
  }

  function removeTodo(todo) {
    setTodos(todos.filter(item => item.text !== todo.text));
  }

  function toggleTodo(todo) {
    setTodos(
      todos.map(item => {
        if (item.text === todo.text) {
          item.completed = !item.completed;
        }
        return item;
      })
    )
  }

  return (
    <Fragment>
      <h1 className="heading">TODOS</h1>
      <TodoInputer onAction={handleAction}/>
      <TodoList data={todos} onToggle={toggleTodo} onRemove={removeTodo}/>
      <Link to="/themes" className="link-text">Theme Switcher</Link>
    </Fragment>
  )
}
