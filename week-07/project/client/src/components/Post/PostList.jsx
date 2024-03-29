import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../../redux/actionCreator';
import PostItem from './PostItem';

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);


  return (
    <div className="post-list">
      {
        posts.length > 0
          ? posts.map(post => <PostItem key={post.id} {...post}/>)
          : <div className="card">No posts here.</div>
      }
    </div>
  )
}

export default PostList;
