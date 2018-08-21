import React from 'react'
import moment from 'moment';

const Transaction = (transaction) => {
  let unformatted = transaction.transaction.date
  let formatted = moment(unformatted).format('l')

  function removeTransaction (event) {
    fetch(`http://localhost:3001/api/v1/transactions/${event.target.id}`, {
      method: "DELETE"
    })
    this.props.removeTransaction(parseInt(event.target.id))
  }


  return (
    <tr className="tableRow">
      <td className="rows">{formatted}</td>
      <td className="rows">{transaction.transaction.child_type}</td>
      <td className="rows">{transaction.transaction.memo}</td>
      <td className="rows">{transaction.transaction.sku}</td>
      <td className="rows">{transaction.transaction.quantity_change}</td>
      <td className="rows">{transaction.transaction.cost_per_unit}</td>
      <td className="rows">{transaction.transaction.amount}</td>

    </tr>
  )
}

export default Transaction
