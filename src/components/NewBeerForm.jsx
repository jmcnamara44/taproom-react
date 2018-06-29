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
          id='name'
          placeholder='Beer Name'/>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'/>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'/>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'/>
        <button type='submit'>Add Beer</button>
      </form>
    </div>
  );
}

export default NewBeerForm;
