import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Logout() {
  const history = useHistory();
  const user = useSelector(state => state.user);

  function handleLogout() {
    window.localStorage.clear();
    history.push('/login');
  }

  return (
    <>
      <strong>LOGGED IN AS {user.name}</strong>
      <button className="login-button" onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Logout;