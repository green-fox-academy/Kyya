import React from 'react';
import { increaseCounter } from './actionCreator';
import { useSelector, useDispatch } from 'react-redux';

function Increaser() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>The Increaser</h1>
      <p>{counter}</p>
      <button onClick={() => dispatch(increaseCounter())}>Increase</button>
    </div>
  )
}

export default Increaser;
