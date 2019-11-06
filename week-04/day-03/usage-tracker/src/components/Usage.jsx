import React from 'react';

function Row(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.time}</td>
    </tr>
  )
}

export default function Usage(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Components</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item, index) => <Row key={index} {...item}/>)}
      </tbody>
    </table>
  )
}
