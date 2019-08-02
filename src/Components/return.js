
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findMyParty } from '../actions/actions';
import Input from './InputField';

class Return extends Component {
  state = {
    partyName: '',
    mockId: 0,
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
      const { findMyParty } = this.props;
      const { partyName, mockId } = this.state;
      findMyParty(partyName, mockId);
    }
    return false;
  }

  validate = () => {
    const { partyName, mockId } = this.state;
    if (partyName === '' && mockId === 0) {
      this.setState({ error: 'Party name and Four digit party id required' });
      return false;
    }
    if (partyName === '') {
      this.setState({ error: 'Party name is required' });
      return false;
    }
    if (mockId === 0) {
      this.setState({ error: 'Four digit party id is required' });
      return false;
    }
    return true;
  };

  render() {
    const { error } = this.state;
    const { backendError } = this.props;
    console.log(backendError)
    return (
      <div className="settings">
        <form>
          <Input label="Party Name" id="partyName" onChange={this.handleChange} />
          <Input label="Four digit party id" id="mockId" onChange={this.handleChange} />
          <button type="button" onClick={this.handleClick}>
          Find my Party
          </button>
          <p>{ error }</p>
          <p>{ backendError }</p>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  findMyParty,
};

const mapStateToProps = state => ({
  backendError: state.findPartyReducer.status,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Return);
