import React from 'react';
import Header from './Header';
import BeerList from './BeerList';
import {Switch, Route } from 'react-router-dom';
import NewBeerForm from './NewBeerForm';
import Error404 from './Error404';
import taproom from '../assets/images/taproom.jpg';

function App(){
  return (
    <div>
      <style global jsx>{`
        body {
          background-image: url(${taproom});
          background-repeat: no-repeat;
          background-position: center;
          background-size: 60%;
          background-color: grey;
        }
        `}
      </style>
      <Header />
      <Switch>
        <Route exact path='/' component={BeerList} />
        <Route path='/newbeer' component={NewBeerForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
