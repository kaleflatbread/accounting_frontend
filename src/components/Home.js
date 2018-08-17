import React, { Component } from 'react';
import SideNavPage from './sidebar.js';
import TransactionList from './TransactionList.js';
import { connect } from 'react-redux';
import InventoryRegister from './InventoryRegister.js';

class Home extends Component {
  state = {
    transactions: [],
    inventoryTransactions: [],
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


  // setStatement = (event) => {
  //   this.setState({
  //     inventoryTransactions: this.state.transactions.filter((transaction) => {
  //       return transaction.sku !== null})}
  //     }



  render() {
    // debugger
    // console.log('home render', this.props.statement)
    // console.log('state', this.state)
    if (this.props.statement === ""){
    return (
      <div>
        <SideNavPage />
        <TransactionList allTransactions={this.state.transactions}/>
      </div>
    )}
    else if (this.props.statement === "Inventory Register") {
      return (
        <div>
          <SideNavPage />
          <InventoryRegister inventoryTransactions={this.props.inventoryTransactions}/>
        </div>
      )}
  }
}

function mapStateToProps(state) {
  return {
    statement: state.statement,
    inventoryTransactions: state.inventoryTransactions
  }
}


export default connect(mapStateToProps)(Home);
