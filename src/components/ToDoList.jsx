import { useState } from "react";

export function ToDoList() {
  const [toDos, setToDos] = useState([]);
  const [toDoInput, setToDoInput] = useState('');

  function AddToDo(event) {
    event.preventDefault();

    if (toDoInput.trim()) {
      setToDos([...toDos, toDoInput]);
      setToDoInput('');
    }
  }

  function handleChange(event) {
    setToDoInput(event.target.value);
  }

  return (
    <div>
        <h1>Enter ToDo</h1>

        <form onSubmit={AddToDo}>
          <input type="text" value={toDoInput} onChange={handleChange} placeholder="Enter ToDo Here" />
          <button type="submit">Add toDo</button>
        </form>

        <ul>
          {toDos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
    </div>
  )
}