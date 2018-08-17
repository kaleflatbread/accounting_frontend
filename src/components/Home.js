import React, { Component } from 'react';
import SideNavPage from './sidebar.js';
import TransactionList from './TransactionList.js';
import { connect } from 'react-redux';
import InventoryRegister from './InventoryRegister.js';

class Home extends Component {
  state = {
    transactions: [],
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

  setStatement = (event) => {
    const statement = event.target.innerHTML
    this.setState({
      statement: statement
    }, () => console.log(this.state))
  }

  renderStatement = () => {
    if (this.props.statement === "") {
      return <TransactionList allTransactions={this.state.transactions}/>
    } else if (this.props.statement === "Inventory Register") {
      return <InventoryRegister allTransactions={this.state.transactions}/>
    }
  }


  render() {
    console.log('home render', this.props.statement)
    if (this.props.statement === ""){
    return (
      <div>
        <SideNavPage onClick={this.setStatement}/>
        <TransactionList allTransactions={this.state.transactions}/>
      </div>
    )}
    else if (this.props.statement === "Inventory Register") {
      return (
        <div>
          <SideNavPage onClick={this.setStatement}/>
          <InventoryRegister allTransactions={this.state.transactions}/>
        </div>
      )}
  }
}

function mapStateToProps(state) {
  return {
    statement: state.statement,
  }
}


export default connect(mapStateToProps)(Home);
