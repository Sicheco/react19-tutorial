import { useFetch } from "./components/useFetch";

export function App() {
  const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');

  return (
    <div>
      {data && data.map((todo) => (
        <ul key={todo.id}>
          <li>{todo.title}</li>
        </ul>
      ))}
    </div>
  );
}