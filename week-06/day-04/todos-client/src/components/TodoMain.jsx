import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoInputer from './TodoInputer';
import TodoList from './TodoList';

import { fetchTodo, addTodo } from '../redux/actionCreator';

export default function TodoMain(props) {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const theme = props.match.params.name;

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]); 

  useEffect(() => {
    document.body.classList.add(`theme-${theme}`);
    return () => document.body.classList.remove(`theme-${theme}`);
  })

  function handleAction(text) {
    if (text !== '') {
      dispatch(addTodo(text));
    }
  }

  return (
    <Fragment>
      <h1 className="heading">TODOS</h1>
      <TodoInputer onAction={handleAction}/>
      <TodoList data={todos} />
      {/* <Link to="/themes" className="link-text">Theme Switcher</Link> */}
    </Fragment>
  )
}
