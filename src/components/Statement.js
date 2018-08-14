import React from 'react';
import Transaction from './Transaction'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class Statement extends React.Component {
  constructor (props) {
      super(props)
      //access dates using this.state.endDate._d and this.state.startDate._d
      this.state = {
        startDate: moment(),
        endDate: moment()
      };
      this.handleStartChange = this.handleStartChange.bind(this);
      this.handleEndChange = this.handleEndChange.bind(this);
    }

    handleStartChange(date) {
      this.setState({
        startDate: date,
      }, () => {console.log(this.state)});
    }

    handleEndChange(date) {
      this.setState({
        endDate: date
      }, () => {console.log(this.state)});
    }

  render() {
    return (
      <div>
        Start Date<DatePicker
          selected={this.state.startDate}
          onChange={this.handleStartChange}
          dateFormat="l"
          />
        End Date<DatePicker
          selected={this.state.endDate}
          onChange={this.handleEndChange}
          dateFormat="l"
          />
        <table className="ui celled striped padded table">
          <tbody>
            <tr className="tableHead">
              <th>Date</th>
              <th>Type</th>
              <th>Memo</th>
              <th>SKU</th>
              <th>Quantity Change</th>
              <th>Cost Per Unit</th>
              <th>$ Amount</th>
            </tr>
            {this.props.allTransactions.map((transaction) => {
              return(
                <Transaction transaction={transaction}/>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  };
}



export default Statement;
