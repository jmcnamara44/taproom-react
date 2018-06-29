import React from 'react';
import { Link } from 'react-router-dom';
import taproom from '../assets/images/taproom.jpg';

function Header(){
  return (
    <div>
      <img src={taproom}/>
      <h1>Taproom</h1>
      <Link to="/">Home</Link> | <Link to="/newbeer">Add a New Beer</Link>
    </div>
  );
}

export default Header;
