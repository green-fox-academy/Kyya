import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage, reloadMessage } from '../redux/actionCreator';
import Message from './Message';

function MessageList() {
  const dispatch = useDispatch();
  const { error, isLoading, data } = useSelector(state => state.messages);

  useEffect(() => {
    dispatch(fetchMessage());
    const timer = setInterval(() => dispatch(reloadMessage()), 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  if (isLoading) {
    return 'Loading...';
  }

  if (error) {
    return error;
  }

  return (
    <div className="message-list">
      {data.map(item => <Message key={item.id} {...item}/>)}
    </div>
  )
}

export default MessageList;
