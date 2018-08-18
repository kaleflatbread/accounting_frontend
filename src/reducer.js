const initialState = {
  statement: "",
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'STATEMENT':
      return { ...state, statement: action.payload}
    case 'INVENTORY_TRANSACTIONS':
      return { ...state, inventoryTransactions: action.payload.filter((transaction) => {
        return transaction.sku !== null
      })}
    case 'LOGIN':
      return { ...state, userId: action.payload}
    case 'EXPENSE_TRANSACTIONS':
      return { ...state, expenseTransactions: action.payload.filter((transaction) => {
        return transaction.sku === null
      })}
    default:
      return state;
  }
}
