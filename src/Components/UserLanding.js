/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMyParty } from '../actions/actions';
import Input from './InputField';

class UserLanding extends Component {
  state = {
    partyName: '',
    error: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    this.setState({
      error: '',
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid === true) {
      const { createMyParty } = this.props;
      const { partyName } = this.state;
      createMyParty(partyName);
    }
    return false;
  }

  validate = () => {
    const { partyName } = this.state;

    if (partyName === '') {
      this.setState({ error: 'Party name is required' });
      return false;
    }
    return true;
  };

  render() {
    const { error } = this.state;
    const { backendError } = this.props;
    return (
      <div className="userLanding">
        <form className="partyNameForm">
          <Input label="Party Name" id="partyName" onChange={this.handleChange} />
          <button className="submitButton" type="button" onClick={this.handleClick} />
        </form>
        <p>{error}</p>
        <p>{backendError}</p>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createMyParty,
};

const mapStateToProps = state => ({
  backendError: state.findPartyReducer.status,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserLanding);
