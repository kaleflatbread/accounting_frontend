import React, { Component } from 'react';
import SideNavPage from './sidebar.js';
import Statement from './Statement.js';


class Home extends Component {
  state = {
    transactions: []
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
    return (
      <div>
        {/*<CalendarForm />*/}
        <SideNavPage />
        <Statement allTransactions={this.state.transactions}/>
      </div>
    );
  }
}

export default Home;
