import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actionCreator';
import './style.css';

import Logout from './logout';

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
    <div className="card login">
      <h1>Welcome to login:)</h1>
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
