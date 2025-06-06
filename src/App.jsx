import { Greeting } from "./components/Greeting";
import { UserStatus } from "./components/UserStatus";
import { Weather } from "./components/Weather";

export function App() {
  return (
    <div>
      <Weather temperature={26} />
      <UserStatus loggedIn={true} isAdmin={false} />
      <Greeting timeOfDay='morning' />
    </div>
  );
}