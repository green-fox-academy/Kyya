import React from 'react';
import { useDispatch } from 'react-redux';
import { sendVote } from '../redux/actionCreator';

function Post(props) {
  const dispatch = useDispatch();
  return (
    <div className="post">
      <div className="post-vote">
        <button onClick={() => dispatch(sendVote(props.id, 'upvote'))}>UP</button>
        <span>{props.score}</span>
        <button onClick={() => dispatch(sendVote(props.id, 'downvote'))}>DOWN</button>
      </div>
      <div className="post-content">
        {props.title}
      </div>
    </div>
  )
}

export default Post;
