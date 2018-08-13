import React from 'react';
import Transaction from './Transaction'

const Statement = (props) => {


    return (
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

            {props.allTransactions.map((transaction) => {
              return(
                <Transaction transaction={transaction}/>
              )
            })}

          </tbody>
        </table>
      )
    };



export default Statement;
