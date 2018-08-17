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
        startDate: moment(),
        endDate: moment(),
        filteredTransactions: [],
      };
      this.handleStartChange = this.handleStartChange.bind(this);
      this.handleEndChange = this.handleEndChange.bind(this);
    }

    handleStartChange(date) {
      this.setState({
        startDate: date,
      }, () => {console.log(this.state)});
    }

    handleEndChange(date) {
      this.setState({
        endDate: date,
      }, () => {console.log(this.state)});
    }
    getFilteredTransactions = () => {
      let filteredTransactions = this.props.allTransactions.filter((transaction) => {
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
      Start Date<DatePicker
        className="dateForm"
        selected={this.state.startDate}
        onChange={this.handleStartChange}
        dateFormat="l"
        />
        End Date<DatePicker
          className="dateForm"
          selected={this.state.endDate}
          onChange={this.handleEndChange}
          dateFormat="l"
          />
        <table className="ui celled striped padded table">
          <tbody>
            <tr className="tableHead">
              <th>Date</th>
              <th>Type</th>
              <th>Memo</th>
              <th>SKU</th>
              <th>Quantity Change</th>
              <th>Cost Per Unit</th>
              <th>$ Amount</th>
              <th></th>
              <th></th>
            </tr>
            {this.props.allTransactions.map((transaction) => {
              return(
                <Transaction key={transaction.id} transaction={transaction}/>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  };
}



export default TransactionList;
