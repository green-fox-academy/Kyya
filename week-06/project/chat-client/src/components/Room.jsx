import React from 'react';

function Room(props) {
  return (
    <div className="room">
      <div className="room-image"><img src={props.image} alt="room_image"/></div>
      <div className="room-info">
        <p className="room-title">{props.title}</p>
        <p className="room-description">{props.description}</p>
      </div>
    </div>
  )
}

export default Room;
