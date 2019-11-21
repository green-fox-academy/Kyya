import React, { useState } from 'react';

function RoomSearcher() {
  const [ value, setValue ] = useState('');
  return (
    <div className="room-searcher">
      <i className="fa fa-search"/>
      <input placeholder="搜索" value={value} onChange={(ev) => setValue(ev.target.value)}/>
    </div>
  )
}

export default RoomSearcher;
