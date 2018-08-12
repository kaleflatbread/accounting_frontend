import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Route, Switch, withRouter } from "react-router-dom"
import UploadCSV from './components/uploadCSV'
import SubmitExpenses from './components/submitExpenses'
import SideNavPage from './components/sidebar.js';
import { connect } from 'react-redux';
import NavbarFeatures from './components/navbar.js';
import Home from './components/Home.js';
import Login from './components/LoginForm.js';

class App extends Component {
  constructor(props) {
  		super(props);

  		this.state = {
  			userId: null,
  			email: null,
  		}
  	}

  setUser = (userId, email) => {
    this.setState({
      userId,
      email,
    })
  }

  render() {
    return (
      <div className="App">
        <NavbarFeatures />
        <SideNavPage />
        <Route exact path="/" render={() => <Home/>}/>
        <Switch>
          <Route path="/inventory/new" render={() => <UploadCSV/>}/>
          <Route path="/expense/new" render={() => <SubmitExpenses/>}/>
          <Route path="/login" render={(routerProps) => <Login {...routerProps} setUser={this.setUser}/>}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
