import React from 'react'
import { useState, useReducer } from 'react'
import { initialCount, counterReducer } from './counterReducer'

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialCount);
  const [inputValue, setInputValue] = useState(0);

  function handleIncrement() {
    dispatch({ type: 'increment' })
  }

  function handleDecrement() {
    dispatch({ type: 'decrement' })
  }

  function handleReset() {
    dispatch({ type: 'reset' })
  }

  function handleIncrementByAmount() {
    dispatch({ type: 'incrementByAmount', payload: Number(inputValue) });
    setInputValue(0);
  }

  function handleDecrementByAmount() {
    dispatch({ type: 'decrementByAmount', payload: Number(inputValue) });
    setInputValue(0);
  }

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement
      }>Decrement</button>
      <button onClick={handleReset}>reset</button>

      <div>
        <input type='number' value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder='Enter Number Here' />
        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Subtract</button>
      </div>
    </div>
  )
}

export default Counter