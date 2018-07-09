import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';

function BeerList(props){

  return (
    <div>
      <hr/>
      {Object.keys(props.beerList).map(function(beerId) {
        var beer = props.beerList[beerId];
        return <Beer name={beer.name}
          brewer={beer.brewer}
          price={beer.price}
          abv={beer.abv}
          poursLeft={beer.poursLeft}
          key={beerId}
          beerId={beerId}
          onPourBeer={props.onPourBeer} />;
      })}
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.object,
  onPourBeer: PropTypes.func
};

export default BeerList;
