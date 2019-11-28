import React from 'react';
import { NavLink } from 'react-router-dom';

function Banner() {
  return (
    <div className="banner">
      <div><p className="text"></p></div>
      <div className="navigation">
        <nav>
          <NavLink activeClassName="active" exact={true} to="/">Posts</NavLink>
          <NavLink activeClassName="active" to="/posts/create">Create Post</NavLink>
          <NavLink activeClassName="active" to="/login">Login</NavLink>
        </nav>
      </div>

    </div>
  )
}

export default Banner;
