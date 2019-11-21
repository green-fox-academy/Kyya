import React, { useState, useEffect } from 'react';

const MYSELF = 'Kyya';

function Message(props) {
  const [styles, setStyles] = useState({});

  useEffect(() => {
    if (props.style) {
      setStyles(styles => ({
        ...styles,
        color: props.style.color,
        background: props.style.background
      }));
    }
  }, [props.style]);

return (
  <div style={styles} className={`message${props.user === MYSELF ? ' right' : ''}`}>
    <div className="message-content">
      {props.text}
    </div>
    <div className="message-meta" style={{ color: props.style ? props.style.color: '#666'}}>
      {props.user}
    </div>
  </div>
)
}

export default Message;
