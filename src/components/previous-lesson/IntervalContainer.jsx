import React from 'react'
import { useState } from 'react'
import IntervalCounter from './IntervalCounter';

function IntervalContainer() {
  const [isMount, setIsMount] = useState(true);

  return (
    <div>
      <button onClick={() => setIsMount(!isMount)}>Mount & Unmount</button>
      {isMount && <IntervalCounter />}
    </div>
  )
}

export default IntervalContainer