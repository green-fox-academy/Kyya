import React from 'react';

export default function SecondComponent(props) {
  return (
    <ul>
      {props.items.map(item => <li>{item}</li>)}
    </ul>
  );
}