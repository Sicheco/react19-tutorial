export const initialCount = { count: 0 };

export function counterReducer(state, action) {
  if (action.type === 'increment') {
    return { ...state, count: state.count + 1 }
  }
  else if (action.type === 'decrement') {
    return { ...state, count: state.count - 1 }
  }
  else if (action.type === 'incrementByAmount') {
    return { ...state, count: state.count + action.payload }
  }
  else if (action.type === 'decrementByAmount') {
    return { ...state, count: state.count - action.payload }
  }
  else if (action.type === 'reset') {
    return { ...state, count: 0 }
  }
}