import React from 'react';
import classNames from 'classname';

export default function Thumbnail(props) {
  return (
    <div onClick={props.onClick} className={classNames("thumbnail", props.active ? "active" : "")}>
      <div style={{ backgroundImage: `url(${props.src})` }}></div>
    </div>
  )
}
