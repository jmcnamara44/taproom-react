import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  var headerStyles = {
    textAlign: 'center',
    fontWeight: 'bold'
  };

  return (
    <div style={headerStyles}>
      <h1>Taproom</h1>
      <Link to="/">Home</Link> | <Link to="/admin">Add a New Beer</Link>
    </div>
  );
}

export default Header;
