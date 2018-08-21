import React from 'react';
import StatementTransaction from './statementTransaction'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {CSVLink} from 'react-csv';
import Button from '@material-ui/core/Button';

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

    // getStartFilteredTransactions = () => {
    //   let filteredTransactions = this.props.inventoryTransactions.filter((transaction) => {
    //     return moment(transaction.date) > moment(this.state.startDate._d)
    //   })
    //   this.setState({
    //     filteredTransactions: filteredTransactions,
    //   })
    // }


    getEndFilteredTransactions = () => {
      let filteredTransactions = this.props.inventoryTransactions.filter((transaction) => {
        return moment(transaction.date) < moment(this.state.endDate._d) && moment(transaction.date) > moment(this.state.startDate._d)
      })
      this.setState({
        filteredTransactions: filteredTransactions,
      })
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

    downloadData = () => {
      let headers = [
        {label: 'Date', key: 'date'},
        {label: 'Account', key: 'account'},
        {label: 'Memo', key: 'memo'},
        {label: 'SKU', key: 'sku'},
        {label: 'Quantity Change', key: 'quantity_change'},
        {label: 'Cost Per Unit', key: 'cost_per_unit'},
        {label: 'Amount', key: 'amount'},
        {label: 'fin', key: 'fin'},
      ];
      let data = []
      this.state.filteredTransactions.map((transaction) => {
          data.push({date: transaction.date, account: transaction.account_id, memo: transaction.memo, sku: transaction.sku, quantity_change: transaction.quantity_change, cost_per_unit: transaction.cost_per_unit, amount: transaction.amount, fin: ''})
      });
      return (
        <CSVLink data={data} headers={headers} filename={"inventory_upload_template.csv"}>
          <Button>CSV Upload Template</Button>
        </CSVLink>
      )
    }


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
      {this.downloadData}
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
    )
  };
}

export default InventoryRegister;
