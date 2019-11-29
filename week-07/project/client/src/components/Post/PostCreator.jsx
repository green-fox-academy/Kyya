import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory} from 'react-router-dom';
import { createPost } from '../../redux/actionCreator';

function PostCreator() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  
  function handleCreate() {
    if (title !== '' && url !== '') {
      dispatch(createPost(title, url))
        .then(() => {
          setTitle('');
          setUrl('');
          history.push('/');
        });
    } else {
      setError('Please fill the empty fields.');
    }
  }
  return (
    <div className="post-creator">
      <h1>Create a post</h1>
      <input placeholder="title" value={title} onChange={(ev) => setTitle(ev.target.value)}/>
      <input placeholder="url" value={url} onChange={(ev) => setUrl(ev.target.value)}/>
      <p className="error">{error}</p>
      <button onClick={handleCreate}>Create</button>
    </div>
  )
}

export default PostCreator;
