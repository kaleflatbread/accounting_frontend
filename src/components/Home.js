import React, { Component } from 'react';


class Home extends Component {


  componentDidMount() {
    fetch("http://localhost:3001/api/v1/transactions", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token'),
      }
    })
    .then(res => res.json())
    .then(console.log)
  }

  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
      HOME!!!!!!!!!
      </div>
    );
  }
}

export default Home;
