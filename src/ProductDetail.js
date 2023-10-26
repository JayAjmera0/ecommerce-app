import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { fetchData } from './apiService';
import { postData } from './apiService';

function ProductDetail({ addToCart }) {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await fetchData();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product.id);
    alert('Product added to cart!');
  };

  // Note: You can't filter on an empty or undefined array. Make sure products is defined and populated.
  const filteredProducts = products ? products.filter(product => product.type === parseInt(id)) : [];

  if (!filteredProducts || filteredProducts.length === 0) {
    return <div>No products found for the specified ID.</div>;
  }

  return (
    <div className="product-list">
      {filteredProducts.map((product, index) => (
        <div className="product-card" key={product.id}>
          <div className={`product-image image${index + 1}`}></div>
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
