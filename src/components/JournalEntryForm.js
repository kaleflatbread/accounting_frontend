import React, { Component } from 'react';

import { connect } from 'react-redux';

class JournalEntryForm extends Component {
  state = {
    user_id: this.props.userId,
    date: "",
    line1Type: "Expense",
    line1Account_id: "",
    line1Memo: "",
    line1Debit: "",
    line1Credit: "",
    line2Type: "Expense",
    line2Account_id: "",
    line2Memo: "",
    line2Debit: "",
    line2Credit: "",
    accounts: [],
  }


  componentDidMount() {
    fetch("http://localhost:3001/api/v1/accounts", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token'),
      },
    })
    .then(res => res.json())
    .then(json => this.setState({
      accounts: json,
    })) ;
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => console.log(this.state))
  }

  handleSelect = (event, account) => {
    console.log(account)
    this.setState({
      [event.target.name]: event.target.value,
    }, () => console.log(this.state))
  }


  handleSubmitLine1 = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/api/v1/transactions", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token'),
      },
      body: JSON.stringify({user_id: this.props.userId, date: this.state.date, account_id: this.state.line1Account_id, type: "Expense", child_type: "Journal Entry", memo: this.state.line1Memo, amount: (this.state.line1Debit-this.state.line1Credit)})
    })
    .then(res => res.json())
    .then(console.log)
    }

  handleSubmitLine2 = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/api/v1/transactions", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token'),
      },
      body: JSON.stringify({user_id: this.state.user_id, date: this.state.date, account_id: this.state.line2Account_id, type: "Expense", child_type: "Journal Entry", memo: this.state.line2Memo, amount: (this.state.line2Debit-this.state.line2Credit)})
    })
    .then(res => res.json())
    .then(console.log)
    }


  render() {
    return (
      <div className="journalEntry">
        <br/>
        <br/>
        <br/>

        <form onSubmit={this.handleSubmit} >
          <label htmlFor="date"></label>
          <input
            type="text"
            name="date"
            placeholder="DD/MM/YYYY"
            onChange={this.handleChange}
            value={this.state.date}
          />
          <label htmlFor="Account"></label>
            <select
            type="text"
            name="line1Account_id"
            placeholder="Account"
            onChange={this.handleSelect}
            value={this.state.line1Account}>

            {this.state.accounts.map((account) => {
              return(
                <option name="line1Account_id" value={account.id} id={account.id}>{account.name}</option>
              )
            })}
            </select>
          <label htmlFor="memo"></label>
            <input
              type="text"
              name="line1Memo"
              placeholder="Memo"
              onChange={this.handleChange}
              value={this.state.line1Memo}
            />
          <label htmlFor="debit"></label>
            <input
              type="text"
              name="line1Debit"
              placeholder="Debit"
              onChange={this.handleChange}
              value={this.state.line1Debit}
            />
          <label htmlFor="credit"></label>
            <input
              type="text"
              name="line1Credit"
              placeholder="Credit"
              onChange={this.handleChange}
              value={this.state.line1Credit}
            />
          <input type="submit" value="Post" onClick={this.handleSubmitLine1} />
        </form>
      <br/>
        <form onSubmit={this.handleSubmitLine2} >
          <label htmlFor="date"></label>
            <input
              type="text"
              name="date"
              placeholder="DD/MM/YYYY"
              onChange={this.handleChange}
              value={this.state.date}
            />
          <label htmlFor="Account"></label>
            <select
              type="text"
              name="line2Account_id"
              placeholder="Account"
              onChange={this.handleSelect}
              value={this.state.line2Account}>
              {this.state.accounts.map((account) => {
                return(
                  <option name="line2Account_id" value={account.id} account={account}>{account.name}</option>
                )
              })}
            </select>
          <label htmlFor="memo"></label>
            <input
              type="text"
              name="line2Memo"
              placeholder="Memo"
              onChange={this.handleChange}
              value={this.state.line2Memo}
            />
          <label htmlFor="debit"></label>
            <input
              type="text"
              name="line2Debit"
              placeholder="Debit"
              onChange={this.handleChange}
              value={this.state.line2Debit}
            />
          <label htmlFor="credit"></label>
            <input
              type="text"
              name="line2Credit"
              placeholder="Credit"
              onChange={this.handleChange}
              value={this.state.line2Credit}
            />
          <input type="submit" value="Post" onClick={this.handleSubmitLine2} />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userId: state.userId,
  }
}

export default connect(mapStateToProps)(JournalEntryForm);
