import React from 'react';

const MYSELF = 'Kyya';

function Message(props) {
  return (
    <div className={`message ${props.user === MYSELF?'green':''}`}>
      {props.text} - {props.user}
    </div>
  )
}

export default Message;
