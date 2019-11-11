import React from 'react';

export default function Thumbnail(props) {
  return (
    <div onClick={props.onClick} className={`thumbnail ${props.active?'active':''}`}>
      <div style={{ backgroundImage: `url(${props.src})` }}></div>
    </div>
  )
}
