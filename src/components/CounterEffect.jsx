import { useState, useEffect } from "react";

import React from 'react'

function CounterEffect() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
  }

  useEffect(() => {
    document.title = `increment ${count}`;
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

export default CounterEffect