import React from 'react';
import PropTypes from 'prop-types';
import AuthorizationQuestion from './AuthorizationQuestion';
import NewBeerForm from './NewBeerForm';

class NewBeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleShowBeerForm = this.handleShowBeerForm.bind(this);
  }

handleShowBeerForm(){
  this.setState({formVisibleOnPage: true});
}

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewBeerForm />;
    } else {
      currentlyVisibleContent = <AuthorizationQuestion onShowBeerForm={this.handleShowBeerForm} />;
    }

    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewBeerControl;
