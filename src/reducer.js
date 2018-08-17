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
    // case 'SET_COUNT':
    //   return { ...state, count: action.payload.count }
    // case 'INCREMENT_FRIENDS':
    //   return { ...state, friends: state.friends + 1 }
    default:
      return state;
  }
}
