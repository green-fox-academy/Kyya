import React from 'react';

let element = <p>Hello React!</p>;
// OR without JSX:
//   let element = React.createElement('p', {}, 'Hello React!')

alert(element.props.children);