import React, { useState } from 'react';
import { setCounter } from './actionCreator';
import { useDispatch } from 'react-redux';

function Resetter() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <h1>The Setter</h1>
      <input value={value} onChange={(ev) => setValue(ev.target.value)}/>
      <button onClick={() => dispatch(setCounter(value))}>Set</button>
    </div>
  )
}

export default Resetter;
