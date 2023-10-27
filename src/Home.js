import React from 'react';
import ProductCard from './ProductCard';
import { fetchProd } from './apiService';
import { useState, useEffect } from 'react';
  

function Home() {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await fetchProd();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
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
