import React from 'react';
import useForm from 'react-hook-form';

function PizzaPicker() {
  const { handleSubmit, register } = useForm();

  function onSubmit(value) {
    console.log(value);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Pizza Picker</h1>
      <fieldset>
        Base:
        <select name="base" ref={register}>
          <option value="Cheese-Stuffed">Cheese-Stuffed</option>
          <option value="Flatbread">Flatbread</option>
          <option value="Sicilian-Style">Sicilian-Style</option>
        </select>
      </fieldset>

      <fieldset>
        Toppings:
        <label><input type="checkbox" name="toppings.mushrooms" ref={register}/> Mushrooms</label>
        <label><input type="checkbox" name="toppings.onions" ref={register}/> Onions</label>
        <label><input type="checkbox" name="toppings.bacon" ref={register}/> Bacon</label>
      </fieldset>

      <fieldset>
        Cut?
        <label><input type="radio" name="cut" value={true} defaultChecked ref={register}/> YES</label>
        <label><input type="radio" name="cut" value={false} ref={register}/> NO</label>
      </fieldset>

      <fieldset>
        Remarks:
        <textarea name="remarks" ref={register}></textarea>
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  )
}

export default PizzaPicker;
