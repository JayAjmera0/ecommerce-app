import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 10, description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: 15, description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', price: 20, description: 'Description for Product 3' },
  { id: 4, name: 'Product 8', price: 20, description: 'Description for Product 3' },
];

function Home({ addToCart }) {
  const handleAddToCart = (product) => {
    addToCart(product);
    alert('Product added to cart!');
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Home;