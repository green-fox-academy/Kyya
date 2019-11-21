import React from 'react';
import { useDispatch } from 'react-redux';
import CheckIcon from './CheckIcon';
import RemoveIcon from './RemoveIcon';
import { removeTodo, toggleTodo } from '../redux/actionCreator';

export default function Todo(props) {
  const dispatch = useDispatch();
  const { id, text, done } = props;
  const itemClasses = `todo-item ${done?'completed':''}`;
  const iconClasses = `icon ${done?'icon-check':'icon-check-outline'}`;
  const styledText = done ? <del>{text}</del> : text;

  return (
    <div className={itemClasses}>
      {styledText}
      <div className="item-actions">
        <RemoveIcon className="icon icon-remove" onClick={() => dispatch(removeTodo(id))}/>
        <CheckIcon check={done?true:false} className={iconClasses} onClick={() => dispatch(toggleTodo({ id, text, done }))}/>
      </div>
    </div>
  )
}
