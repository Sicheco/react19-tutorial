import { useState } from "react";

export function ComponentOne() {
  const [count, setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });

  const incrementClickHandler = () => setCount(previousCount => previousCount + 1);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementClickHandler}>
        Increment
      </button>
    </div>
  )
}