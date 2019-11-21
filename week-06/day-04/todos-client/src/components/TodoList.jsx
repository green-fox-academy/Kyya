import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
  const { data, ...rest } = props;
  return (
    <div className="todo-list">
      <ul>
      {data.map(item => <li key={item.text}><Todo {...item} {...rest} /></li>)}
      </ul>
    </div>
  )
}
