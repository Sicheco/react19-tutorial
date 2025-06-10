import { useContext } from 'react';
import React from 'react';
import { Test1, Test2 } from '../App';

function ComponentC() {
  const username = useContext(Test1);
  const age = useContext(Test2);

  return (
    <diV> 
      <h1>Name: {username}</h1>
      <h1>Age: {age}</h1>
    </diV>
  )
}

export default ComponentC