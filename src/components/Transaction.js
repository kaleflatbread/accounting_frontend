import React from 'react'

const Transaction = (transaction) => {
  // debugger
  return (
    <tr>
      <td className="rows">{transaction.transaction.date}</td>
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
