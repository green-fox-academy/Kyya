import React, { useState } from 'react';

function PostComment(props) {
  const [comment, setComment] = useState('');

  function handleComment() {
    if (comment !== '') {
      props.onComment(comment);
      setComment('');
    }
  }
  return (
    <div className="post-textarea">
      <textarea value={comment} onChange={(ev) => setComment(ev.target.value)}/>
      <div className="post-toolbar">
        <button onClick={handleComment}>COMMENT</button>
      </div>
    </div>
  )
}

export default PostComment;
