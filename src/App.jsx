import { Counter } from "./components/Counter";
import { Profile } from "./components/Profile";
import { ShoppingList } from "./components/ShoppingList";
import { ToDoList } from "./components/ToDoList";

export function App() {

  return (
    <div>
      <Counter />
      <ToDoList />
      <Profile />
    </div>
  );
}