import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Post from './Post';

import { fetchPost } from '../redux/actionCreator';

function PostList() {
  const dispatch = useDispatch();
  const { error, isLoading, data } = useSelector(state => state.posts);

  if (isLoading) {
    return <div className="lds-dual-ring"></div>;
  }

  if (error) {
    return error;
  }

  return (
    <div className="posts">
      {data.length === 0 && <button onClick={() => dispatch(fetchPost())}>Fetch Posts</button>}
      {data.map(item => <Post key={item.id} {...item} />)}
    </div>
  )
}

export default PostList;
