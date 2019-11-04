import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  return <span>{props.children}</span>
}

Display.propTypes = {
  children: PropTypes.number
}

export default Display;
