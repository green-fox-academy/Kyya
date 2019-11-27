import React, { useState } from 'react';

function PostComment() {
  const [comment, setComment] = useState('');
  return (
    <div className="post-comment">
      <textarea value={comment} onChange={(ev) => setComment(ev.target.value)}/>
      <div className="post-toolbar">
        <button>COMMENT</button>
      </div>
    </div>
  )
}

export default PostComment;
