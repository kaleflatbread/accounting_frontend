import React, { Component } from 'react';
import { withRouter } from "react-router-dom";


class RegistrationForm extends Component {
  state = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    role: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => console.log(this.state))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/api/v1/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(this.props.history.push('/login'))
  }

  render() {
    return (
      <div className="login">
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
          <label htmlFor="first_name"></label>
            <input
              type="text"
              name="first_name"
              placeholder="First name"
              onChange={this.handleChange}
              value={this.state.first_name}
            />
          <label htmlFor="last_name"></label>
            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              onChange={this.handleChange}
              value={this.state.last_name}
            />
          <label htmlFor="role"></label>
            <input
              type="text"
              name="role"
              placeholder="Role"
              onChange={this.handleChange}
              value={this.state.role}
            />
          <input type="submit" value="Register" />
        </form>
      </div>
    )
  }
}

export default withRouter(RegistrationForm);
