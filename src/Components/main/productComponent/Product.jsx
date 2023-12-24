// Product.js
import React from 'react';
import './ProductStyles.scss';

const Product = ({ product }) => {
  if (!product) {
    <progress/>
}

  return (
    <div key={product.id} className="product-card">
      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
      <button
        className="add-to-cart-button"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
