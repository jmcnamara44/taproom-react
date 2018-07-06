import React from 'react';
import PropTypes from 'prop-types';

function NewBeerForm(props){

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    console.log("form");
    props.onNewBeerCreation();
  }

  return (
    <div>
      <form onSubmit={handleNewBeerFormSubmission}>
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

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
}

export default NewBeerForm;
