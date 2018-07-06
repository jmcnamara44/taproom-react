import React from 'react';
import Header from './Header';
import BeerList from './BeerList';
import {Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import NewBeerControl from './NewBeerControl';
import taproom from '../assets/images/taproom.jpg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: {}
    };
    this.handleNewBeerCreation = this.handleNewBeerCreation.bind(this);
  }

  handleNewBeerCreation() {
    console.log("handleNewBeerCreation works!");
  }
  render() {
    return (
      <div>
        <style global jsx>{`
          body {
            // background-image: url(${taproom});
            // background-repeat: no-repeat;
            // background-position: center;
            // background-size: 55%;
            background-color: grey;
          }
          `}
        </style>
        <Header />
        <Switch>
          <Route exact path='/' component={BeerList} />
          <Route path='/admin' render={()=><NewBeerControl onNewBeerCreation={this.handleNewBeerCreation} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
