import React, { useState, useEffect } from 'react';
import useForm from "react-hook-form";

function Registration() {
  const [isDisabled, setDisabled] = useState(true);
  const { handleSubmit, register, triggerValidation, errors } = useForm();

  const onSubmit = values => {
    console.log(values);
  };

  function handleChange() {
    setDisabled(true);
    triggerValidation();
  }

  useEffect(() => { 
    if (Object.keys(errors).length === 0) {
      setDisabled(false);
    }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          ref={register({
            required: 'Required'
          })}
          onChange={handleChange}
        />
      </label>
      <span style={{color: 'red'}}>{errors.username && errors.username.message}</span>

      <label>
        Email:
        <input
          type="text"
          name="emailAddress"
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address"
            }
          })}
          onChange={handleChange}
        />
      </label>
      <span style={{color: 'red'}}>{errors.emailAddress && errors.emailAddress.message}</span>

      <label>
        Password:
        <input
          type="password"
          name="password"
          ref={register({
            required: true,
            minLength: {
              value: 8,
              message: 'Invalid password length(not >= 8)'
            }
          })}
          onChange={handleChange}
        />
      </label>
      <span style={{color: 'red'}}>{errors.password && errors.password.message}</span>

      <button disabled={isDisabled} type="submit">Submit</button>
    </form>
  );
}

export default Registration;
