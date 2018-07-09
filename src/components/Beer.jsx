import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  var beerDiv = {
    borderStyle: 'solid'
  };

  return (
    <div style={beerDiv}>
      <h3>Name: {props.name}</h3>
      <h4>Brewer: {props.brewer}</h4>
      <h4>Price ${props.price}</h4>
      <h4>ABV: {props.abv}%</h4>
      <h4>Pours Left: {props.poursLeft}</h4><button onClick={() => {props.onPourBeer(props.beerId);}}>Pour Beer</button>
    </div>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string,
  poursLeft: PropTypes.number,
  beerId: PropTypes.string,
  onPourBeer: PropTypes.func
};

export default Beer;
