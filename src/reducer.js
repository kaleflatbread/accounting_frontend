const initialState = {
  statement: ""
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'STATEMENT':
      return { ...state, statement: this.state.statement}
    // case 'DECREMENT':
    //   return { ...state, count: state.count - 1 }
    // case 'SET_COUNT':
    //   return { ...state, count: action.payload.count }
    // case 'INCREMENT_FRIENDS':
    //   return { ...state, friends: state.friends + 1 }
    default:
      return state;
  }
}
