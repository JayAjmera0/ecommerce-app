
import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: 10, description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: 15, description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', price: 20, description: 'Description for Product 3' },
  { id: 4, name: 'Product 4', price: 20, description: 'Description for Product 3' },
];


function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = products.find(product => product.id === productId);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product added to cart!');
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
