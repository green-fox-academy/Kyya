import React from 'react';

export default function HotelFilterItem(props) {
  return (
    <li>
      <input type="checkbox" defaultChecked={props.checked}/>
      { props.name }
    </li>
  )
}
