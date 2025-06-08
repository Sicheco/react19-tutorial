import { useEffect, useState } from "react";

export function ComponentThree() {
  const [name, setName] = useState(() => {
    const savedName = getNameLocalStorage();
    return savedName || '';
  })

  useEffect(() => {
    setNameLocalStorage()
  })

  function setNameLocalStorage() {
    return localStorage.setItem('name', JSON.stringify(name));
  }

  function getNameLocalStorage() {
    return JSON.parse(localStorage.getItem('name'));
  }

  const changeSetName = (event) => {
    setName(event.target.value);
  }

  const clearSetName = () => {
    setName('');
  }

  return (
    <div>
      <h1>Your Name: {name}</h1>

      <input type="text" value={name} onChange={changeSetName} placeholder="Enter your name" />
      
      <button onClick={clearSetName}>Clear Name</button>
    </div>
  )
}