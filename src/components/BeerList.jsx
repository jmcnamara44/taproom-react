import React from 'react';
import Beer from './Beer';

var masterBeerList = [
  {
    name: 'Stony Joe',
    brewer: 'Stony Creek',
    price: 6,
    abv: 5.5,
    poursLeft: 120
  },
  {
    name: 'The Abider',
    brewer: 'Edmunds Oast',
    price: 6,
    abv: 12.1,
    poursLeft: 120
  },
  {
    name: 'Pabst Blue Ribbon',
    brewer: 'Pabst Brewing Company',
    price: 3,
    abv: 5,
    poursLeft: 120
  }
];

function BeerList(){
  return (
    <div>
      <hr/>
      {masterBeerList.map((ticket, index) =>
        <Beer
          name={ticket.name}
          brewer={ticket.brewer}
          price={ticket.price}
          abv={ticket.abv}
          poursLeft={ticket.poursLeft}
          key={index}/>
      )}
    </div>
  );
}

export default BeerList;
