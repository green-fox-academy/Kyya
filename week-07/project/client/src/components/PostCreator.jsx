import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../redux/actionCreator';

function PostCreator() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  return (
    <div className="post-creator">
      <input placeholder="Title" value={title} onChange={(ev) => setTitle(ev.target.value)}/>
      <input placeholder="Url" value={url} onChange={(ev) => setUrl(ev.target.value)}/>
      <button onClick={() => dispatch(createPost(title, url))}>Create</button>
    </div>
  )
}

export default PostCreator;
