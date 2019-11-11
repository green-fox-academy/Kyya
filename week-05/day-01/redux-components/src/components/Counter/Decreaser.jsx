import React from 'react';
import { decreaseCounter } from './actionCreator';
import { useSelector, useDispatch } from 'react-redux';

function Decreaser() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>The Decreaser</h1>
      <p>{counter}</p>
      <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
    </div>
  )
}

export default Decreaser;
