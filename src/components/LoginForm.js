import React, { Component } from 'react';

import { connect } from 'react-redux';

class Login extends Component {
  state = {
    email: "",
    password: "",
  }


  componentDidMount() {
    console.log(localStorage.getItem('token'));
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/sessions", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(json => {
      if(json.email){
        console.log(json)
        localStorage.setItem('token', json.token);
        this.props.setUser(json.id, json.email)
        this.props.history.push('/')
        this.props.dispatch({type: 'LOGIN', payload: json.id})
      }else{

      }
    })
  }

  render() {
    // debugger
    return (
      <div className="login">
        <br/>
        <br/>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email"></label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    email: state.email,
    userId: state.userId,
  }
}

export default connect(mapStateToProps)(Login);
