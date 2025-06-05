export function ProductInfo() {
const product = {
  name: 'Laptop',
  price: 1200,
  availability: 'in stock'
};

  return (
  <div>
    <p>Name: {product.name}</p>
    <p>Price: ${product.price}</p>
    <p>Availability: {product.availability}</p>
  </div>
  );
}