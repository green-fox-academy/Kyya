import React from 'react';
import CheckIcon from './CheckIcon';
import RemoveIcon from './RemoveIcon';

export default function Todo(props) {
  const { text, completed } = props;
  const itemClasses = `todo-item ${completed?'completed':''}`;
  const iconClasses = `icon ${completed?'icon-check':'icon-check-outline'}`;
  const styledText = completed ? <del>{text}</del> : text;

  return (
    <div className={itemClasses}>
      {styledText}
      <div className="item-actions">
        <RemoveIcon className="icon icon-remove" onClick={() => props.onRemove({ text, completed })}/>
        <CheckIcon check={completed?true:false} className={iconClasses} onClick={() => props.onToggle({ text, completed })}/>
      </div>
    </div>
  )
}
