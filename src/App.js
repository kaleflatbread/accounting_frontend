import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarFeatures from './navbar.js';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Route, Switch, withRouter } from "react-router-dom"
import UploadCSV from './uploadCSV'
import SubmitExpenses from './submitExpenses'

// import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarFeatures />
        <Route exact path="/" />
        <Switch>
          <Route path="/inventory/new" render={(renderProps) => <UploadCSV history={renderProps.history}/>}/>
          <Route path="/expense/new" render={() => <SubmitExpenses/>}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
