/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPartyName } from '../actions/actions';
import Input from '../Components/InputField';


class partyName extends Component {
  state = {
    partyName: '',
    error: '',
  }

  validate = () => {
    const {
      partyName,
    } = this.state;
    if (!partyName) {
      this.setState({ error: 'Partyname is required!' });
      return false;
    }
    return true;
  };

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
      const { partyName } = this.state;
      addPartyName(partyName);
    }
    return false;
  };

  render() {
    const { error } = this.state;
    return (
      <div className="landing">
        <form className="partyNameForm">
          <Input label="partyName" id="partyName" onChange={this.handleChange} />
          <button onClick={this.handleClick} buttonText="Submit" />
          <p>{ error }</p>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  partyName,
};

export default connect(
  mapDispatchToProps,
)(partyName);
