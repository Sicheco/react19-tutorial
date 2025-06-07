import { useState } from "react"

export function ComponentTwo({count, clickHandler}) {
  const [randomNumber, setRandomNumber] = useState(() => {
    return Math.floor(Math.random() * 100);
  });

  const generateNewRandomNumber = () => {
    return Math.floor(Math.random() * 100);
  }

  const renderNewRandomNumber = () => {
    setRandomNumber(generateNewRandomNumber());
  }
  
  return (
    <div>
      <h1>Random Number: {randomNumber}</h1>
      <button onClick={renderNewRandomNumber}>Generate New Random Number</button>
    </div>
  )
}