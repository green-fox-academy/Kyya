import React, { useState } from 'react';
import { useLocalStorage } from '../../hooks';
import { Redirect } from 'react-router-dom';
import './style.css';

function Logout(props) {
  return (
    <>
      <strong>LOGGED IN AS Kyya</strong>
      <button className="login-button" onClick={() => props.onLogout()}>Logout</button>
    </>
  )
}

function Login() {
  const [ toHome, setToHome ] = useState(false);
  const [ name, setName ] = useState('');
  const [ error, setError ] = useState('');
  const [ isLogin, setLogin ] = useLocalStorage('isLogin', false);

  function handleLogin() {
    if (name === 'Kyya') {
      setLogin(true);
      setToHome(true);
    } else {
      setLogin(false);
      setError(`User ${name} does not exists!`);
    }
  }

  if (toHome) {
    return <Redirect to="/"/>
  }

  return (
    <div className="login">
      <h1>Welcome :)</h1>
      { isLogin 
        ? <Logout onLogout={() => setLogin(false)}/>
        : <>
            <label>
              Please provide your name: 
              <input value={name} onChange={(ev) => setName(ev.target.value)}/>
              <span>{error}</span>
            </label>
            <button class="login-button" onClick={handleLogin}>Login</button>
        </>
      }
    </div>
  )
}

export default Login;
