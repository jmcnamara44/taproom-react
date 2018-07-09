import React from 'react';
import PropTypes from 'prop-types';

function NewBeerForm(props){
  let _name = null;
  let _brewer = null;
  let _price = null;
  let _abv = null;
  let _poursLeft = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({name: _name.value, brewer: _brewer.value, price: _price.value, abv: _abv.value, poursLeft: props.kegPours});
    _name.value = '';
    _brewer.value = '';
    _price.value = '';
    _abv.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewBeerFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'
          ref={(input) => {_name = input;}}/><br/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer'
          ref={(input) => {_brewer = input;}}/><br/>
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/><br/>
        <input
          type='text'
          id='abv'
          placeholder='ABV'
          ref={(input) => {_abv = input;}}/><br/>
        <button type='submit'>Add Beer</button>
      </form>
    </div>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func,
  kegPours: PropTypes.number
};

export default NewBeerForm;
