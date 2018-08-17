import React from 'react'
import moment from 'moment';

const Transaction = (transaction) => {
  let unformatted = transaction.transaction.date
  let formatted = moment(unformatted).format('l')

  return (
    <tr>
      <td className="rows">{formatted}</td>
      <td className="rows">{transaction.transaction.child_type}</td>
      <td className="rows">{transaction.transaction.memo}</td>
      <td className="rows">{transaction.transaction.sku}</td>
      <td className="rows">{transaction.transaction.quantity_change}</td>
      <td className="rows">{transaction.transaction.cost_per_unit}</td>
      <td className="rows">{transaction.transaction.amount}</td>
      <td className="rows"><button>Edit</button></td>
      <td className="rows"><button>Delete</button></td>

    </tr>
  )
}

export default Transaction
