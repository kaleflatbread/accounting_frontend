import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Route, Switch, withRouter } from "react-router-dom"
import UploadCSV from './components/uploadCSV'
import SubmitExpenses from './components/submitExpenses'
import { connect } from 'react-redux';
import NavbarFeatures from './components/navbar.js';
import Home from './components/Home.js';
import Login from './components/LoginForm.js';
import RegistrationForm from './components/RegistrationForm.js';

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
          <Route path="/inventory/new" render={() => <UploadCSV/>}/>
          <Route path="/expense/new" render={() => <SubmitExpenses/>}/>
          <Route path="/login" render={(routerProps) => <Login {...routerProps} setUser={this.setUser}/>}/>
          <Route path="/user/new" render={(routerProps) => <RegistrationForm {...routerProps}/>}/>
        </Switch>
      </div>
    );
  }
}


function msp(state){
  return {
    heads: state.heads,
    bodies: state.bodies,
    feet: state.feet,
  }
}

function mdp(dispatch){

  return {
    addHeads: (headsData) => {
      dispatch({type: "ADD_HEADS", payload: headsData })
    },
    addBodies: (bodiesData) => {
      dispatch({type: "ADD_BODIES", payload: bodiesData })
    },
    addFeet: (feetData) => {
      dispatch({type: "ADD_FEET", payload: feetData })
    }
  }
}

export default withRouter(connect(msp, mdp)(App))
