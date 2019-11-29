import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../redux/actionCreator';
import './style.css';

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

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error ] = useState('');
  const user = useSelector(state => state.user);

  function handleLogin() {
    if (name !== '' && password !== '') {
      dispatch(loginUser(name, password, history));
    }
  }

  return (
    <div className="login">
      <h1>Welcome :)</h1>
      { user
        ? <Logout/>
        : <>
            <label>
              Please provide your name: 
              <input type="text" value={name} onChange={(ev) => setName(ev.target.value)}/>
            </label>
            <label>
              Please provide your password: 
              <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)}/>
            </label>
            <p className="error">{error}</p>
            <button className="login-button" onClick={handleLogin}>Login</button>
        </>
      }
    </div>
  )
}

export default Login;
