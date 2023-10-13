import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button className="details-button">View Details</button>
      </Link>
    </div>
  );
}

export default ProductCard;
