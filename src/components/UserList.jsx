export function UserList() {
  const users = [
    {
      id: 1,
      name: 'Shalom',
      age: 22 
    },
    {
      id: 2,
      name: 'Rahu',
      age: 25 
    },
    {
      id: 3,
      name: 'Hecate',
      age: 18 
    }
  ];

  return (
    <div>
      {users.map(({id ,name, age}) => (
        <div key={id}>
          <div>{name}</div>
          <div>{age}</div>
        </div>
      ))}
    </div>
  );
}