import React from 'react'
import { useState, useEffect } from 'react'

function IntervalCounter() {
  const [count, setCount] = useState(0);

  function automateCount() {
    setCount(prevCount => prevCount + 1);
  }

  useEffect(() => {
    function interval() {
      setInterval(automateCount, 1000);
    }

    interval();

    return (() => {
      clearInterval(interval);
    })
  }, [])

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default IntervalCounter