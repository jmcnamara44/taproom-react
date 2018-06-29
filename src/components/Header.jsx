import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <style jsx>{`
        div {
          text-align: center;
        }
      `}</style>
      <h1>Taproom</h1>
      <Link to="/">Home</Link> | <Link to="/newbeer">Add a New Beer</Link>
    </div>
  );
}

export default Header;
