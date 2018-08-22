import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink} from 'mdbreact';
import { connect } from 'react-redux';
import { Icon } from "@blueprintjs/core";


class NavbarFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWideEnough: false,
    };
  }

  logout = () => {
    localStorage.removeItem('token');
    this.props.logout();
  }



  render() { if (this.props.userId) {
    return (
        <Navbar className="navbar" dark expand="md" scrolling>
          <NavbarBrand >
            <strong>ABY</strong>
          </NavbarBrand>
            { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
          <Collapse isOpen = { this.state.collapse } navbar>
            <NavbarNav left>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/inventory/new">Inventory Upload</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/expense/new">Create Journal Entry</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                  <NavLink onClick={this.logout} to="/login"><Icon icon="log-out" /></NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
    )} else {
      return (
        <Navbar className="navbar" dark expand="md" scrolling>
          <NavbarBrand >
            <strong>ABY</strong>
          </NavbarBrand>
            { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
          <Collapse isOpen = { this.state.collapse } navbar>
            <NavbarNav left>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/inventory/new">Inventory Upload</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/expense/new">Create Journal Entry</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                  <NavLink to="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="/user/new">Register</NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    userId: state.userId,
  }
}

export default connect(mapStateToProps)(NavbarFeatures)
