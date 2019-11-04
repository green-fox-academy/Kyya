import React from 'react';
import HotelListItem from './HotelListItem';

export default function HotelList(props) {
  return (
    <div className="HotelList">
      <ul>
        { props.list.map(item => <li key={item.name}><HotelListItem {...item}/></li>) }
      </ul>
    </div>
  )
}
