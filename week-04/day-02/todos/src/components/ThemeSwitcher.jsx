import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function ThemeSwitcher() {
  return (
    <Fragment>
      <h1 className="heading">THEME SWITCHER</h1>
      <p className="theme-text">Default</p>
      <p className="theme-text">Superman</p>
      <p className="theme-text">Batman</p>
      <Link to="/" className="link-text">Back</Link>
    </Fragment>
  )
}
