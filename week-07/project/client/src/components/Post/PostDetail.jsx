import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../config';

function PostDetail() {
  const [ post, setPost ] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/posts/${id}`)
      .then(response => response.json())
      .then(response => setPost(response))
  }, [id]);

  if (!post) {
    return <p>Loading...</p>
  }

  return (
    <div className="post-detail">
      {post.title}
    </div>
  )
}

export default PostDetail;
