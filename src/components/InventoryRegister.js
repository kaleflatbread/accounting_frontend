import React from 'react';
import StatementTransaction from './statementTransaction'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class InventoryRegister extends React.Component {
  constructor (props) {
      super(props)
      //access dates using this.state.endDate._d and this.state.startDate._d
      this.state = {
        startDate: moment('1/1/2018'),
        endDate: moment('8/31/2018'),
        filteredTransactions: this.props.inventoryTransactions,
        inventory: []
      };
      this.handleStartChange = this.handleStartChange.bind(this);
      this.handleEndChange = this.handleEndChange.bind(this);
    }

    getStartFilteredTransactions = () => {
      let filteredTransactions = this.props.inventoryTransactions.filter((transaction) => {
        return moment(transaction.date) > moment(this.state.startDate._d)
      })
      this.setState({
        filteredTransactions: filteredTransactions,
      })
    }


    getEndFilteredTransactions = () => {
      let filteredTransactions = this.props.inventoryTransactions.filter((transaction) => {
        return moment(transaction.date) < moment(this.state.endDate._d)
      })
      this.setState({
        filteredTransactions: filteredTransactions,
      })
    }

    handleStartChange(date) {
      this.setState({
        startDate: date,
      }, () => {console.log(this.state)});
      this.getStartFilteredTransactions()
    }

    handleEndChange(date) {
      this.setState({
        endDate: date,
      }, () => {console.log(this.state)});
      this.getEndFilteredTransactions()
    }

  // formatInventory = () => {
  //   var formattedInventory = {}
  //   this.props.inventoryTransactions.map((transaction) => {
  //     formattedInventory[transaction.sku] += 1
  //   })
  //   this.setState({
  //     inventory: formattedInventory
  //   }, console.log(this.state))
  // }


  render() {
    // debugger
    return (
      <div>
        <h1> INVENTORY REGISTER </h1>
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
            </tr>
            {this.state.filteredTransactions.map((transaction) => {
              return(
                <StatementTransaction key={transaction.id} transaction={transaction}/>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  };
}

export default InventoryRegister;
