import React, { Component } from 'react';
import JournalEntryForm from './JournalEntryForm.js';
import { connect } from 'react-redux';


class SubmitExpenses extends Component {
  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <JournalEntryForm currentUser={this.props.userId}/>
      </div>
    );
  }
}

export default connect()(SubmitExpenses);
