import { Card } from "./components/Card";
import { Person } from "./components/Person";
import { Product } from "./components/Product";

export function App() {
  return (
    <div>
      <User name='Shalom' age='18' />
    </div>
  );
}

function User({name, age}) {
  return (
    <div>
      <Card>
        <h1>My Card</h1>
        <p>This is my card</p>
      </Card>
      <Card>
        <h1>My Card 2</h1>
        <p>This is my card</p>
      </Card>
      <Card>
        <h1>My Card 3</h1>
        <p>This is my card</p>
      </Card>

      <Person name='Shalom' age={22} />
      <Product name='Laptop' price={2999} />
    </div>
  );
}