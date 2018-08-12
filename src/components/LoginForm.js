import React, { Component } from 'react';
// import Adapter from '../apis/Adapter';

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
      console.log(json)
      localStorage.setItem('token', json.token);
      this.props.setUser(json.id, json.email)
      this.props.history.push('/')
    })
      // Adapter.postLoginUser(this.state.email, this.state.password)
      // .then(json => {
      //   localStorage.setItem('token', json.token);
      //   this.props.setUser(json.id, json.email);
      //   this.props.history.push('/recipes');
      // })
  }

  render() {

    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <label htmlFor="password">Password</label>
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

export default Login;
