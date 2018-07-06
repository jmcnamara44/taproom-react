import React from 'react';

function NewBeerForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer'/>
        <input
          type='text'
          id='price'
          placeholder='Price'/>
        <input
          type='text'
          id='abv'
          placeholder='ABV'/>
        <input
          type='text'
          id='poursLeft'
          placeholder='Pours Left'/>
        <button type='submit'>Add Beer</button>
      </form>
    </div>
  );
}

export default NewBeerForm;
