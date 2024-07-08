import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import '../styles/Home.css';
import '../bannerBG.jpg';

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
        <h1>We Make it Possible.</h1>
      </div>

      <div className="featured-products">
        <h2>Featured Products</h2>
        <ProductList products={featuredProducts} />
      </div>

      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        <div className="review">
          <p>"I recently had outdoor lights installed by Modern Edge Solution, and the service was outstanding from start to finish. The installation was smooth, and the team was professional, efficient, and friendly. The quality of the lights and the overall installation exceeded my expectations. I highly recommend Modern Edge Solution for anyone looking to enhance their outdoor spaces with beautiful and reliable lighting."</p>
          <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733; - Modaser</div>
        </div>
        
        <div className="review">
          <p>"I recently had Reza from Modern Edge Solutions work on my several home repair and improvment projects, including extensive deck repairs, a bathroom remodel, and wooden door repairs, ect. I am beyond impressed with his work. Reza is truly the Elon Musk of his field—his ability to custom make anything is astounding.
Reza’s craftsmanship is unparalleled, and his dedication to hard work and honesty shines through in every project. Communication was seamless, and he fully understood my needs, providing creative solutions to all my problems. After searching for good contractors for years, I am thrilled to have found Reza. His services are also very cost-effective, with no middlemen involved.
If you’re in need of a handyman who can do it all, look no further than Modern Edge Solutions. I highly recommend Reza and am confident you will be as satisfied with his work as I am.
Thank you, Reza, for your outstanding work!!!"</p>
          <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733; - Kelly</div>
        </div>
        <div className="review">
          <p>"I was having trouble finding someone who could renovate a bathroom the way that I pictured it. After 2 different contractors I gave Modern Edge Solutions a chance and I wish I chose them from the beginning! They did a great job listening to my requests and explaining how they can make it possible. Now I recommend them to all my neighbors!"</p>
          <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733; - Ali</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
