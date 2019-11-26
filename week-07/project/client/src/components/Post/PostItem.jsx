import React from 'react';
import { useDispatch } from 'react-redux';
import { sendVote, removePost } from '../../redux/actionCreator';

function PostItem(props) {
  const dispatch = useDispatch();
  return (
    <div className="post">
      <div className="post-vote">
        <button className="vote-button" onClick={() => dispatch(sendVote(props.id, 'upvote'))}><i className="upvote"/></button>
        <span>{props.score}</span>
        <button className="vote-button" onClick={() => dispatch(sendVote(props.id, 'downvote'))}><i className="downvote"/></button>
      </div>
      <div className="post-content">
        <div className="post-title">
          {props.title}
        </div>
        <div className="post-link">
          <a target="_blank" rel="noopener noreferrer" href={props.url}>{props.url.replace(/https?:\/\//, '')}</a>
        </div>
        <div className="post-action">
          <span>comments(0)</span>
          <span onClick={() => dispatch(removePost(props.id))}>delete</span>
        </div>
      </div>
    </div>
  )
}

export default PostItem;
