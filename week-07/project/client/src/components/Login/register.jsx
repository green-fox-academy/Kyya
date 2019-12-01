import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../../redux/actionCreator';

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ error ] = useState('');

  function handleRegister() {
    if (name !== '' && password !== '' && email !== '') {
      dispatch(registerUser(name, password, email))
        .then(() => history.push('/'));
    }
  }

  return (
    <div className="card register">
      <h1>Welcome to register:)</h1>
        <label>
          Please provide your name: 
          <input type="text" value={name} onChange={(ev) => setName(ev.target.value)}/>
        </label>
        <label>
          Please provide your password: 
          <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)}/>
        </label>
        <label>
          Please provide your email: 
          <input type="email" value={email} onChange={(ev) => setEmail(ev.target.value)}/>
        </label>
        <p className="error">{error}</p>
        <button className="register-button" onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Register;
