import React from 'react';
import { resetCounter } from './actionCreator';
import { useDispatch } from 'react-redux';

function Resetter() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>The Resetter</h1>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  )
}

export default Resetter;
