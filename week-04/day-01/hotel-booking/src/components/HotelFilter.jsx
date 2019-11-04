import React from 'react';
import HotelFilterItem from './HotelFilterItem';

export default function HotelFilter(props) {
  return (
    <section className="HotelFilter">
      <h1>{ props.title }</h1>
      <ul>
        { props.list.map(item => <HotelFilterItem key={item.name} {...item}/>) }
      </ul>
    </section>
  )
}
