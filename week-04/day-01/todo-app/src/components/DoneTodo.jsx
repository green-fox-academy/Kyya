import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function DoneTodo(props) {
  return (
    <Fragment>
      {props.text}
      <button onClick={props.onAction}>delete</button>
    </Fragment>
  )
}

DoneTodo.propTypes = {
  text: PropTypes.string,
  onAction: PropTypes.func
}

export default DoneTodo;
