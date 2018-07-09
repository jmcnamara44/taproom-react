import React from 'react';
import Header from './Header';
import BeerList from './BeerList';
import {Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import NewBeerControl from './NewBeerControl';
import taproom from '../assets/images/taproom.jpg';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: {},
      selectedBeer: null
    };
    this.handleNewBeerCreation = this.handleNewBeerCreation.bind(this);
    this.handlePourBeer = this.handlePourBeer.bind(this);
  }

  handleNewBeerCreation(newBeer) {
    var newBeerId = v4();
    var newMasterBeerList = Object.assign({}, this.state.masterBeerList, {
      [newBeerId]: newBeer
    });
    this.setState({masterBeerList: newMasterBeerList});
  }

  handlePourBeer(beer) {
    this.setState({selectedBeer: beer});
    alert('selected beer is now: ' + this.state.selectedBeer);
  }

  render() {
    return (
      <div>
        <style global jsx>{`
          body {
            // background-image: url(${taproom});
            // background-repeat: no-repeat;
            // background-position: 50% 30%;
            // background-size: 30%;
            background-color: grey;
          }
          `}
        </style>
        <Header />
        <Switch>
          <Route exact path='/' render={(props)=><BeerList beerList={this.state.masterBeerList} onPourBeer={this.handlePourBeer}
          selectedBeer={this.state.selectedBeer} />} />
          <Route path='/admin' render={()=><NewBeerControl onNewBeerCreation={this.handleNewBeerCreation} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
