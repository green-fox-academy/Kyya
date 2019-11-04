import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Todo(props) {
  return (
    <Fragment>
      {props.text}
      <button onClick={props.onAction}>done</button>
    </Fragment>
  )
}

Todo.propTypes = {
  text: PropTypes.string,
  onAction: PropTypes.func
}

export default Todo;
