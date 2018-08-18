import React, { Component } from 'react';
import SideNavPage from './sidebar.js';
import TransactionList from './TransactionList.js';
import { connect } from 'react-redux';
import InventoryRegister from './InventoryRegister.js';
import ExpenseSummary from './expenseSummary.js';

class Home extends Component {
  state = {
    transactions: [],
    inventoryTransactions: [],
    expenseTransactions: []
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/transactions", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token'),
      }
    })
    .then(res => res.json())
    .then(json => this.setState({
      transactions: json
    }))
  }


  render() {
    if (this.props.statement === "" || this.props.statement === "All Transactions"){
      return (
        <div>
          <SideNavPage />
          <TransactionList allTransactions={this.state.transactions}/>
        </div>
      )
    }else if (this.props.statement === "Inventory Register") {
      return (
        <div>
          <SideNavPage />
          <InventoryRegister inventoryTransactions={this.props.inventoryTransactions}/>
        </div>
      )
    }else if (this.props.statement === "Expense Summary") {
      return (
        <div>
          <SideNavPage />
          <ExpenseSummary expenseTransactions={this.props.expenseTransactions}/>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    statement: state.statement,
    inventoryTransactions: state.inventoryTransactions,
    expenseTransactions: state.expenseTransactions
  }
}


export default connect(mapStateToProps)(Home);
