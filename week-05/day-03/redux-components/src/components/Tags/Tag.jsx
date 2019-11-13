import React from 'react';

function Tag(props) {
  return <span className="tag" style={{ backgroundColor: props.color }}>{props.tag}</span>
}

export default Tag;
