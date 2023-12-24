// Main.js
import React, { useState, useEffect } from 'react';
import Product from './productComponent/Product';
import './MainStyle.scss';


const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API when the component mounts
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="main-container">
      <h2 className='Header'>Our Products</h2>
      <div className="product-list">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Main;
