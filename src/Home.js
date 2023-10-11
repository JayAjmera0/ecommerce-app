import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'T-Shirts', price: '10 - 25' },
];

function Home() {
  return (
    <div>
      <div className="home-header">
        <h1>Product List</h1>
        <img
          src="../public/fashion_blog.jpg"// Replace with the actual image path
          className="big-image"
        />
      </div>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
