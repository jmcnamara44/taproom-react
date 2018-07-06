import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AuthorizationQuestion(props){
  return(
    <div>
      <h1>Are you an employee of this brewery, authorized to add new beers to the tap list?</h1>
      <button onClick={props.onShowBeerForm}>Yes</button>
      <Link to="/">No, take me home</Link>
    </div>
  );
}

AuthorizationQuestion.proptypes = {
  onShowBeerForm: PropTypes.func
};
 export default AuthorizationQuestion;
