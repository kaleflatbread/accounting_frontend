import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, withRouter, Link } from 'react-router-dom';
import UploadCSV from './uploadCSV'

class NavbarFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };
  this.onClick = this.onClick.bind(this);
  this.toggle = this.toggle.bind(this);
  }

  onClick(){
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  changeUrl = () => {
    this.props.history.push("/inventory/new")
  }

  render() {
    // <NavLink to="/inventory/new">Upload CSV</NavLink>
    return (
        <Navbar color="pink darken-2" dark expand="md" scrolling>
          <NavbarBrand href="/">
            <strong>Quickbooks 2.0</strong>
          </NavbarBrand>
            { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
          <Collapse isOpen = { this.state.collapse } navbar>
            <NavbarNav left>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/inventory/new">Upload CSV</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/expense/new">Submit Expenses</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
            { /* <NavItem>
                <form className="form-inline md-form mt-0">
                  <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
                </form>
              </NavItem>*/ }
              <NavItem>
                  <NavLink to="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="/logout">Logout</NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
    );
  }
}
export default withRouter(NavbarFeatures)
