import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function ThemeSwitcher() {
  return (
    <Fragment>
      <h1 className="heading">THEME SWITCHER</h1>
      <Link className="theme-text" to="/themed/default">Default</Link>
      <Link className="theme-text" to="/themed/superman">Superman</Link>
      <Link className="theme-text" to="/themed/batman">Batman</Link>
      <Link to="/" className="link-text">Back</Link>
    </Fragment>
  )
}
