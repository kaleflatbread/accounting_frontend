import React from 'react'
import moment from 'moment';

const StatementTransaction = (transaction) => {
  let unformatted = transaction.transaction.date
  let formatted = moment(unformatted).format('l')


  // formatInventory = () => {
  //   var formattedInventory = {}
  //   this.props.inventoryTransactions.map((transaction) => {
  //     formattedInventory[transaction.sku] = formattedInventory[transaction.sku] + transaction.quantity_change
  //   })
  //   this.setState({
  //     inventory: formattedInventory
  //   }, console.log(this.state))
  // }


  return (
    <tr>
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

export default StatementTransaction
