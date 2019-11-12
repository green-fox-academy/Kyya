import React, { useState } from 'react';

function Registration() {
  const [hasSubmitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  function handleChange(ev) {
    setData({
      ...data,
      [ev.target.name]: ev.target.value
    });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <form>
        <label>
          First Name:
          <input type="text" name="firstName" value={data.firstName} onChange={handleChange}/>
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={data.lastName} onChange={handleChange}/>
        </label>
        <label>
          Email:
          <input type="email" name="email" value={data.email} onChange={handleChange}/>
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <ul>
        { hasSubmitted && Object.values(data).map((item, index) => <li key={index}>{item}</li>) }
      </ul>
    </>
  )
}

export default Registration;
