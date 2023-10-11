import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'T- Shirts',price: '10 - 25' },

];

function Home() {
  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
