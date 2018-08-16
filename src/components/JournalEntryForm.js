import React, { Component } from 'react';
// import Adapter from '../apis/Adapter';

class JournalEntryForm extends Component {
  state = {
    user_id: 1,
    date: "",
    line1Type: "Expense",
    line1Account_id: "",
    line1Child_type: "Journal Entry",
    line1Memo: "",
    line1Debit: "",
    line1Credit: "",
    line2Type: "Expense",
    line2Account_id: "",
    line2Child_type: "Journal Entry",
    line2Memo: "",
    line2Amount: "",
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


  handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/api/v1/transactions", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token'),
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(console.log)
    }


  render() {

    return (
      <div className="journalEntry">

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="date"></label>
          <input
            type="text"
            name="date"
            placeholder="MM/DD/YYYY"
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
        <br/>
        <br/>
          <label htmlFor="date"></label>
          <input
            type="text"
            name="date"
            placeholder="MM/DD/YYYY"
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
            name="line2Amount"
            placeholder="Debit"
            onChange={this.handleChange}
            value={this.state.line1Credit}
          />
        <label htmlFor="credit"></label>
          <input
            type="text"
            name="line2Amount"
            placeholder="Credit"
            onChange={this.handleChange}
            value={this.state.line1Debit}
          />
        <br/>
        <input type="submit" value="Post" />


        </form>
      </div>
    )
  }
}

export default JournalEntryForm;
