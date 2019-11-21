import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage, sendMessageLocal, reloadMessage } from '../redux/actionCreator';

function MessageSender() {
  const dispatch = useDispatch();
  const [ text, setText ] = useState('');

  function handleMessageSending() {
    if (text !== '') {
      dispatch(sendMessage(text));
      setText('');
    }
  }

  function handleKeyDown(ev) {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      handleMessageSending();
    }
  }

  return (
    <div className="message-sender">
      <div className="toolbar">
        <button className="button circle" onClick={() => dispatch(reloadMessage())}>
          <i className="fa fa-refresh"/>
        </button>
        <button className="button circle">
          <i className="fa fa-paper-plane"/>
        </button>
        <button className="button circle">
          <i className="fa fa-commenting-o"/>
        </button>
      </div>
      <textarea value={text} onChange={(ev) => setText(ev.target.value)} onKeyDown={handleKeyDown}/>
      <div className="toolbar-bottom">
        <button className="button" onClick={() => dispatch(sendMessageLocal(text))}>Send Local</button>
        <button className="button" onClick={handleMessageSending}>Send</button>
      </div>
    </div>
  )
}

export default MessageSender;
