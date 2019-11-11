import React from 'react';
import { useSelector } from 'react-redux';

function ComplexCounter() {
  const lengthOfCounter = useSelector(state => state.counter);
  const lengthOfTags = useSelector(state => state.tags.length);
  return (
    <div>
      <h1>Complex Counter</h1>
      <span>{lengthOfCounter + lengthOfTags}</span>
    </div>
  )
}

export default ComplexCounter;
