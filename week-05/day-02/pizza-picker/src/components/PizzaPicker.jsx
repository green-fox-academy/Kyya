import React from 'react';
import useForm from 'react-hook-form';

function PizzaPicker() {
  const { handleSubmit, register, getValues, errors } = useForm();

  function onSubmit(value) {
    console.log(value);
  }

  function handleClick(ev) {
    ev.preventDefault();
    console.log(getValues());
  }

  function handleChange() {
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Pizza Picker</h1>
      <fieldset>
        Base:
        <select name="base" ref={register} onChange={handleChange}>
          <option value="Cheese-Stuffed">Cheese-Stuffed</option>
          <option value="Flatbread">Flatbread</option>
          <option value="Sicilian-Style">Sicilian-Style</option>
        </select>
      </fieldset>

      <fieldset>
        Toppings:
        <label><input type="checkbox" name="mushrooms" ref={register}/> Mushrooms</label>
        <label><input type="checkbox" name="onions" ref={register}/> Onions</label>
        <label><input type="checkbox" name="bacon" ref={register}/> Bacon</label>
      </fieldset>

      <fieldset>
        Cut?
        <label><input type="radio" name="cut" value="true" ref={register}/> YES</label>
        <label><input type="radio" name="cut" value="false" ref={register}/> NO</label>
      </fieldset>

      <fieldset>
        Remarks:
        <textarea name="remarks" ref={register}></textarea>
      </fieldset>

      <button onClick={handleClick}>Submit</button>
    </form>
  )
}

export default PizzaPicker;
