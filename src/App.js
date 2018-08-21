import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Route, Switch, withRouter } from "react-router-dom"
import UploadCSV from './components/uploadCSV'
import { connect } from 'react-redux';
import NavbarFeatures from './components/navbar.js';
import Home from './components/Home.js';
import Login from './components/LoginForm.js';
import RegistrationForm from './components/RegistrationForm.js';
import JournalEntryForm from './components/JournalEntryForm.js';


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

  logout = () => {
    this.setState({
      userId: null,
      username: null,
    })
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={(routerProps) => <NavbarFeatures {...routerProps} logout={this.logout}/>}/>


        <Route exact path="/" render={() => <Home/>}/>
        <Switch>
          <Route path="/inventory/new" render={(routerProps) => <UploadCSV {...routerProps} />}/>
          <Route path="/expense/new" render={() => <JournalEntryForm currentUser={this.state.userId}/>}/>
          <Route path="/login" render={(routerProps) => <Login {...routerProps} setUser={this.setUser}/>}/>
          <Route path="/user/new" render={(routerProps) => <RegistrationForm {...routerProps}/>}/>
        </Switch>
      </div>
    );
  }
}


function msp(state){
  return {
    statement: state.statement,
  }
}

function mdp(dispatch){

  return {
    statement: (statement) => {
      dispatch({type: "STATEMENT", payload: statement })
    },
    // addBodies: (bodiesData) => {
    //   dispatch({type: "ADD_BODIES", payload: bodiesData })
    // },
    // addFeet: (feetData) => {
    //   dispatch({type: "ADD_FEET", payload: feetData })
    }
  }

export default withRouter(connect(msp, mdp)(App))
