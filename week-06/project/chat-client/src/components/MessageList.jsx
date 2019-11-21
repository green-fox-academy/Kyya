import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage, reloadMessage } from '../redux/actionCreator';
import Message from './Message';

function MessageList() {
  const dispatch = useDispatch();
  const { error, isLoading, data } = useSelector(state => state.messages);
  const messageEnd = useRef(null);

  useEffect(() => {
    dispatch(fetchMessage());
    const timer = setInterval(() => dispatch(reloadMessage()), 1000 * 60);
    return () => clearInterval(timer);
  }, [dispatch]);

  useEffect(() => {
    messageEnd.current.scrollIntoView({ behavior: "smooth" });
  }, [data]);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <div className="message-list">
      { error
          ? <Message user="System" text={error} />
          : data.map(item => <Message key={item.id} {...item}/>)
      }
      <div className="message-list-end" ref={messageEnd}></div>
    </div>
  )
}

export default MessageList;
