const initialState = {
  statement: ""
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'STATEMENT':
      return { ...state, statement: action.payload}
    case 'INVENTORY_TRANSACTIONS':
      return { ...state, inventoryTransactions: action.payload.filter((transaction) => {
        return transaction.sku !== null
      })}
    default:
      return state;
  }
}
