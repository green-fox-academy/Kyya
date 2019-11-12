import React, { useState } from 'react';
import useForm from 'react-hook-form';

function Registration() {
  const { register, handleSubmit } = useForm();
  const [ submittedValues, setSubmittedValues ] = useState({});

  function onSubmit(values) {
    setSubmittedValues(values);
    console.log(values);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration</h1>
        <label>
          First Name:
          <input type="text" name="firstName" ref={register}/>
        </label>

        <label>
          Last Name:
          <input type="text" name="lastName" ref={register}/>
        </label>

        <label>
          Email:
          <input type="email" name="email"  ref={register}/>
        </label>

        <button type="submit">Submit</button>
      </form>
      <ul>
        {
          Object.keys(submittedValues).length > 0 
          && Object.values(submittedValues).map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
    </>
  )
}

export default Registration;
