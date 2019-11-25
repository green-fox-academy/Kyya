import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost } from '../redux/actionCreator';
import Post from './Post';

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  return (
    <div className="post-list">
      <ul>
        {posts.map(post => <li key={post.id}><Post {...post}/></li>)}
      </ul>
    </div>
  )
}

export default PostList;
