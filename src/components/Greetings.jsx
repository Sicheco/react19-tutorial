export function Greetings() {
const name = 'Vincent';
const today = new Date();
const formattedToday = today.toLocaleDateString();

  return  (
    <div>
      <h1>Hi! Im {name}</h1>
      <p>The date today is {formattedToday}</p>
    </div>
  );
}