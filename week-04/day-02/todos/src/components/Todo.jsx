import React from 'react';

export default function Todo(props) {
  const { text, completed } = props;
  const style = { color: completed ? '#dddddd' : '#b8b8b8' };
  const classes = `icon ${completed?'icon-check':'icon-check-outline'}`;
  const styledText = completed ? <del>{text}</del> : text;

  return (
    <div className="todo-item" style={style}>
      {styledText}
      <div className="item-actions">
        <i className="icon icon-del" onClick={() => props.onRemove({ text, completed })}/>
        <i className={classes} onClick={() => props.onToggle({ text, completed })}/>
      </div>
    </div>
  )
}
