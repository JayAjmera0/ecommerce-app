import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, type: 2, name: 'Product 1', price: 10, description: 'Description for Product 1' },
  { id: 2, type: 2, name: 'Product 2', price: 15, description: 'Description for Product 2' },
  { id: 3, type: 2, name: 'Product 3', price: 20, description: 'Description for Product 3' },
  { id: 4, type: 2, name: 'Product 4', price: 25, description: 'Description for Product 4' },
];

function ProductDetail({ addToCart }) {
  const { id } = useParams();

  // Filter products based on the provided ID
  const filteredProducts = products.filter(product => product.type === parseInt(id));

  const handleAddToCart = (product) => {
    addToCart(product);
    alert('Product added to cart!');
  };

  if (filteredProducts.length === 0) {
    return <div>No products found for the specified ID.</div>;
  }

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
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

export default ProductDetail;
