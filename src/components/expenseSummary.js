import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatementTransaction from './statementTransaction'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class ExpenseSummary extends Component {
  constructor (props) {
      super(props)
      //access dates using this.state.endDate._d and this.state.startDate._d
      this.state = {
        startDate: moment('1/1/2018'),
        endDate: moment('8/31/2018'),
        filteredTransactions: this.props.expenseTransactions,
        inventory: []
      };
      this.handleStartChange = this.handleStartChange.bind(this);
      this.handleEndChange = this.handleEndChange.bind(this);
    }

    handleStartChange(date) {
      this.setState({
        startDate: date,
      }, () => {console.log(this.state)});
      // this.getStartFilteredTransactions()
    }

    handleEndChange(date) {
      this.setState({
        endDate: date,
      }, () => {console.log(this.state)});
      this.getEndFilteredTransactions()
    }

    // getStartFilteredTransactions = () => {
    //   let filteredTransactions = this.props.expenseTransactions.filter((transaction) => {
    //     return moment(transaction.date) > moment(this.state.startDate._d)
    //   })
    //   this.setState({
    //     filteredTransactions: filteredTransactions,
    //   })
    // }


    getEndFilteredTransactions = () => {
      let filteredTransactions = this.props.expenseTransactions.filter((transaction) => {
        return moment(transaction.date) < moment(this.state.endDate._d) && moment(transaction.date) > moment(this.state.startDate._d)
      })
      this.setState({
        filteredTransactions: filteredTransactions,
      })
    }



  render() {
    // debugger
    return (
      <div>
        <h1> Expense Summary </h1>
        <br/>
        <div className="inlineContainer">
      <p>Start Date</p><DatePicker
        className="dateForm"
        selected={this.state.startDate}
        onChange={this.handleStartChange}
        dateFormat="l"
        />
      <p>End Date</p><DatePicker
        className="dateForm"
        selected={this.state.endDate}
        onChange={this.handleEndChange}
        dateFormat="l"
        />
    </div>
    <br/>
    <div className="transactionContainer">
        <table className="ui celled striped padded table">
          <thead>
            <tr className="tableHead">
              <th>Date</th>
              <th>Type</th>
              <th>Memo</th>
              <th>SKU</th>
              <th>Quantity Change</th>
              <th>Cost Per Unit</th>
              <th>$ Amount</th>
            </tr>
          </thead>
            <tbody>
            {this.state.filteredTransactions.map((transaction) => {
              return(
                <StatementTransaction key={transaction.id} transaction={transaction}/>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
    )
  };
}

export default ExpenseSummary;
