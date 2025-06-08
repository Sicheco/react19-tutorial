import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(2);

  function incrementCount() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  )
}