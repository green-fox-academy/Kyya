import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage, sendMessageLocal, reloadMessage } from '../redux/actionCreator';

function MessageSender() {
  const dispatch = useDispatch();
  const [ text, setText ] = useState('');

  return (
    <div className="message-sender">
      <textarea value={text} onChange={(ev) => setText(ev.target.value)}/>
      <div className="toolbar">
        <button className="button" onClick={() => dispatch(reloadMessage())}>Refresh</button>
        <button className="button" onClick={() => dispatch(sendMessageLocal(text))}>Send Local</button>
        <button className="button" onClick={() => dispatch(sendMessage(text))}>Send</button>
      </div>
    </div>
  )
}

export default MessageSender;
