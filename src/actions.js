export function clickStatement() {
  return { type: 'STATEMENT' }
}

export function incrementFriendsAction() {
  return { type: 'INCREMENT_FRIENDS' }
}

export function setCountAction(count) {
  return { type: 'SET_COUNT', payload: count }
}
