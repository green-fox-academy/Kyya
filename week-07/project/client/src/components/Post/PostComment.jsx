import React from 'react';

function PostComment(props) {
  return (
    <div className="post-comment">
      <div className="comment-vote">
        <button className="vote-button" onClick={() => null}>
          <i className="fa fa-chevron-up" />
        </button>
        <span>{props.score}</span>
        <button className="vote-button" onClick={() => null}>
          <i className="fa fa-chevron-down" />
        </button>
      </div>
      <div className="comment-content">
        {props.text}
      </div>
    </div>
  )
}

export default PostComment;
