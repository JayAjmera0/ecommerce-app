import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'T-Shirts', price: '150 - 250' },
  { id: 2, name: 'Pajamas', price: '100 - 280' },
  { id: 3, name: 'Dresses', price: '300 - 500' },
];

function Home() {
  return (
    <div>
      <div className="home-header">
        <img
          src="/fashion_blog.jpg" // Replace with the actual image path
          alt="img"
          className="big-image"
        />
        <h1>Our Products</h1>
      </div>
      <div className="product-list-container"> {/* Container for the product list */}
        <div className="product-list">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
