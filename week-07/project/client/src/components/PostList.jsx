import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';

function PostList() {

  const posts = useSelector(state => state.posts);

  return (
    <div className="post-list">
      {posts.map(post => <Post key={post.id} {...post}/>)}
    </div>
  )
}

export default PostList;
