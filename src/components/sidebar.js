import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';

import Divider from '@material-ui/core/Divider';


const styles = {
  list: {
    width: 175,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    left: false,
    statement: "",
    transactions: []
  };

  componentDidMount() {
    fetch("http://localhost:3001/api/v1/transactions", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token'),
      }
    })
    .then(res => res.json())
    .then(json => this.setState({
      transactions: json
    }))
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  showStatement = (event) => {
    const statement = event.target.innerHTML
    // this.setState({
    //   statement: statement
    // })
    this.props.dispatch({type: 'STATEMENT', payload: statement})
    this.props.dispatch({type: 'INVENTORY_TRANSACTIONS', payload: this.state.transactions})
  }

  render() {
    const { classes } = this.props;
    console.log(this.props)
    const sideList = (
      <div onClick={this.showStatement} className={classes.list}>
        <Button>Income Statement</Button>
        <Divider />
        <Button>Balance Sheet</Button>
        <Divider />
        <Button>Inventory Register</Button>
        <Divider />
        <Button>Expense Summary</Button>
      </div>
    );

    return (
      <div className="statementsButton">
        <Button onClick={this.toggleDrawer('left', true)}>Statements</Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    statement: state.statement,
    inventoryTransactions: state.inventoryTransactions
  }
}




export default connect(mapStateToProps)(withStyles(styles)(TemporaryDrawer));
