import React from 'react'
import { useRef } from 'react'

function FocusInput() {
  const inputElement = useRef(null);

  function focusInputAndWriteShalom() {
    inputElement.current.focus();
    inputElement.current.value = 'Shalom';
  }

  return (
    <div>
      <input type='text' ref={inputElement} placeholder='Enter Name Here' />
      <button onClick={focusInputAndWriteShalom}>Focus and Shalom</button>
    </div>
  )
}

export default FocusInput