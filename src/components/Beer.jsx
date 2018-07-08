import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h4>Brewer: {props.brewer}</h4>
      <h4>Price ${props.price}</h4>
      <h4>ABV: {props.abv}%</h4>
      <h4>Pours Left: {props.poursLeft}</h4>
    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string,
  poursLeft: PropTypes.string,
  beerId: PropTypes.string
};

export default Beer;
