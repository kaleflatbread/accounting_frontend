import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink} from 'mdbreact';

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

  render() {
    return (
        <Navbar className="navbar" dark expand="md" scrolling>
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
                  <NavLink onClick={this.logout} to="/login">Logout</NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
    );
  }
}
export default NavbarFeatures
