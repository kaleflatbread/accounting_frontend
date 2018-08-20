import React from 'react'
import moment from 'moment';

const IncomeStatementLine = (transaction) => {


  return (
    <tr>
      <td className="rows">{transaction.transaction.account_id}</td>
      <td className="rows">{transaction.transaction.amount}</td>

    </tr>
  )
}

export default IncomeStatementLine;
