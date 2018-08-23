import React from 'react';
import Transaction from './Transaction'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class TransactionList extends React.Component {
  constructor (props) {
      super(props)
      //access dates using this.state.endDate._d and this.state.startDate._d
      this.state = {
        startDate: moment('1/1/2018'),
        endDate: moment('8/31/2018'),
        filteredTransactions: this.props.allTransactions,
      };
      // this.handleStartChange = this.handleStartChange.bind(this);
      // this.handleEndChange = this.handleEndChange.bind(this);
    }

    // handleStartChange(date) {
    //   this.setState({
    //     startDate: date,
    //   }, () => {console.log(this.state)});
    //   this.getStartFilteredTransactions()
    // }
    //
    // handleEndChange(date) {
    //   this.setState({
    //     endDate: date,
    //   }, () => {console.log(this.state)});
    //   this.getEndFilteredTransactions()
    // }
    //
    // getStartFilteredTransactions = () => {
    //   let filteredTransactions = this.props.allTransactions.filter((transaction) => {
    //     return moment(transaction.date) > moment(this.state.startDate._d)
    //   })
    //   this.setState({
    //     filteredTransactions: filteredTransactions,
    //   })
    // }
    //
    //
    // getEndFilteredTransactions = () => {
    //   let filteredTransactions = this.props.allTransactions.filter((transaction) => {
    //     return moment(transaction.date) < moment(this.state.endDate._d)
    //   })
    //   this.setState({
    //     filteredTransactions: filteredTransactions,
    //   })
    // }

  render() {
    // debugger
    return (
      <div>
      <h1 className="statementTitle"> All Transactions </h1>
      <div className="transactionContainer">
        <br/>
        <table className="table" >
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
            {this.props.allTransactions.map((transaction) => {
              return(
                <Transaction key={transaction.id} transaction={transaction}/>
              )
            })}
          </tbody>
        </table>
      </div>
      </div>
    )
  };
}


export default TransactionList;
