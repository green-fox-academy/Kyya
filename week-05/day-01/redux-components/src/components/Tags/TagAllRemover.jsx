import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAllTags } from './actionCreator';

function TagAllRemover() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Remove All Tags</h1>
      <button onClick={() => dispatch(removeAllTags())}>Remove all tags</button>
    </div>
  )
}

export default TagAllRemover;
