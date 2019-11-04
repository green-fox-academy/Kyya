import React from 'react';

export default function HotelListItem(props) {
  return (
    <div className="HotelListItem">
      <h1>{props.name}</h1>
      <div className="content">
        <div className="preview">
          <img src={props.imageURL} alt={props.name}/>
        </div>
        <div className="description">
          <p>{props.description}</p>
          <button>Book Now!</button>
        </div>
      </div>
    </div>
  )
}
