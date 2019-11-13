import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { asyncIncreaseCounter } from './actionCreator';

function AsyncIncreaser() {
  const [increase, setIncrease] = useState(0);
  const [delay, setDelay] = useState(0);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Async Increaser</h1>
      <input type="number" value={increase} onChange={(ev) => setIncrease(Number.parseInt(ev.target.value))}/>
      <input type="number" value={delay} onChange={(ev) => setDelay(Number.parseInt(ev.target.value))}/>
      <button onClick={() => dispatch(asyncIncreaseCounter(increase, delay))}>Async Increase</button>
    </div>
  )
}

export default AsyncIncreaser;
