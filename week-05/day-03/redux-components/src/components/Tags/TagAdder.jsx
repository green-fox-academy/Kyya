import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTag } from './actionCreator';

function TagAdder() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Add Tag</h1>
      <input value={value} onChange={(ev) => setValue(ev.target.value)}/>
      <button onClick={() => dispatch(addTag(value))}>Add</button>
    </div>
  )
}

export default TagAdder;
