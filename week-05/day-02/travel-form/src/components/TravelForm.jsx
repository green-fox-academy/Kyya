import React from 'react';
import useForm from 'react-hook-form';

function TravelForm() {
  const { register, handleSubmit, errors } = useForm();

  function onSubmit(values) {
    console.log(values);
    alert(`    First name: ${values.firstName}
    Last name: ${values.lastName}
    Age: ${values.age}
    Gender: ${values.gender}
    Location: ${values.location}
    Dietary restrictions: ${Object.keys(values.dietaryRestrictions).join(', ')}`);
  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Travel</h1>
      <label>
        First Name:
        <input type="text" name="firstName" ref={register} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" ref={register} />
      </label>
      <label>
        Age:
        <input 
          type="number"
          name="age"
          ref={register({
            required: true,
            min: {
              value: 0,
              message: "Please type the correct age"
            },
            max: {
              value: 150,
              message: "please type the correct age"
            }
          })} />
      </label>

      <fieldset>
        Gender:
        <label><input type="radio" name="gender" value="male" ref={register} /> Male</label>
        <label><input type="radio" name="gender" value="female" ref={register} /> Female</label>
      </fieldset>

      <fieldset>
        Location:
        <select name="location" ref={register}>
          <option value="BeiJing">Beijing</option>
          <option value="Shanghai">Shanghai</option>
          <option value="Hongkong">Hongkong</option>
        </select>
      </fieldset>

      <fieldset>
        Dietary restrictions:
        <label><input type="checkbox" name="dietaryRestrictions.vegetarian" ref={register} /> Vegetarian</label>
        <label><input type="checkbox" name="dietaryRestrictions.kosher" ref={register} /> Kosher</label>
        <label><input type="checkbox" name="dietaryRestrictions.lactose" ref={register} /> Lactose</label>
      </fieldset>

      <p style={{ color: 'red' }}>
        {Object.keys(errors).length > 0 && Object.values(errors).map(error => error.message).join('\n')}
      </p>

      <button type="submit">Submit</button>
    </form>
  )
}

export default TravelForm;
