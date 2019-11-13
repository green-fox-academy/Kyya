import React from 'react';

function Post(props) {
  return (
    <article>
      <a className="title" target="_blank" href="#" rel="noopener noreferrer">{props.title}</a>
      <p>{props.body}</p>
    </article>
  )
}

export default Post;
