export function ProductList() {
  const products = [
    {
      id: 1,
      name: 'Phone',
      price: 699
    },
    {
      id: 2,
      name: 'Laptop',
      price: 1499
    },
    {
      id: 3,
      name: 'Computer',
      price: 2999
    }
  ];

  return (
    <div>
      {products.map(({id, name, price}) => (
        <div key={id}>
          <div>{name}</div>
          <div>${price}</div>
        </div>
      ))}
    </div>
  );
}