import React from 'react';
import Beer from './Beer';

function BeerList(){
  return (
    <Beer
      name="Stony Joe"
      brewer="Stony Creek"
      price="$6.00"
      abv="5.5%"
      poursLeft="120"/>
  );
}

export default BeerList;
