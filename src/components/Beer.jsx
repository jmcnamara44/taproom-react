import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  return (
    <div>
      <h3>{props.name}</h3>
      <h4>{props.brewer}</h4>
      <h4>{props.price}</h4>
      <h4>{props.abv}</h4>
      <h4>{props.poursLeft}</h4>
    </div>
  );
}

Beer.propTypes = {
  names: PropTypes.string,
  brewer: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  poursLeft: PropTypes.number
};

export default Beer;
