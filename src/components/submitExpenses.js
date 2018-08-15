import React, { Component } from 'react';
import JournalEntryForm from './JournalEntryForm.js';


class SubmitExpenses extends Component {
  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <JournalEntryForm currentUser={this.props.currentUser}/>
      </div>
    );
  }
}

export default SubmitExpenses;
