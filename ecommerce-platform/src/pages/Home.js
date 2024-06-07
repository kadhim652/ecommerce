import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import '../styles/Home.css';

// Mock data for featured products
const mockProducts = [
  { id: 1, name: 'Product 1', description: 'Description 1', price: 10, imageUrl: 'path/to/image1.jpg' },
  { id: 2, name: 'Product 2', description: 'Description 2', price: 20, imageUrl: 'path/to/image2.jpg' },
  { id: 3, name: 'Product 3', description: 'Description 3', price: 30, imageUrl: 'path/to/image3.jpg' },
];

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching data by setting mock data
    setFeaturedProducts(mockProducts);
  }, []);

  return (
    <div className="home">
      <div className="banner">
        <h1>Welcome to Allawi's shop</h1>
        <p>The world's best products</p>
      </div>

      <div className="featured-products">
        <h2>Featured Products</h2>
        <ProductList products={featuredProducts} />
      </div>
    </div>
  );
};

export default Home;
