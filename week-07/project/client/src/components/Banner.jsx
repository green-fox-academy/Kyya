import React from 'react';
import { NavLink } from 'react-router-dom';

function Banner() {
  return (
    <div className="banner">
      <div><p className="text"></p></div>
      <div className="navigation">
        <nav>
          <NavLink activeClassName="active" exact={true} to="/">Posts</NavLink>
          <NavLink activeClassName="active" to="/my">User</NavLink>
          <NavLink activeClassName="active" to="/404">404</NavLink>
          <NavLink activeClassName="active" to="/posts/create"><i className="fa fa-plus"/>Create</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Banner;
