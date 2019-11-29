import React from 'react';
import { useSelector } from 'react-redux';

function User() {
  const user = useSelector(state => state.user);
  return (
    <div className="card user">
      {
        user
        ? <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
        : <p> Please Login first</p>
      }
    </div>
  )
}

export default User;
