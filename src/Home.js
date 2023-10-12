import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'T-Shirts', price: '10 - 25' },
  { id: 2, name: 'Pajamas', price: '10 - 25' },
  { id: 3, name: 'Chaddi buddy', price: '10 - 25' },
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
        <h1>Product List</h1>
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
