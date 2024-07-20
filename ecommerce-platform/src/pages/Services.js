import React from 'react';
import '../styles/Services.css';
import bathroomImg from '../images/bathroom.jpg';
import kitchenImg from '../images/kitchen.jpg';
import basementImg from '../images/basement.jpg';

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>

      <div className="service">
        <div className="service-text">
          <h2>Bathroom Remodeling</h2>
          <p>We provide top-notch bathroom remodeling services that guarantee a luxurious and comfortable space. Our team ensures high-quality workmanship and attention to detail in every project.</p>
        </div>
        <div className="service-image">
          <img src={bathroomImg} alt="Bathroom Remodeling" />
        </div>
      </div>

      <div className="service">
        <div className="service-text">
          <h2>Kitchen Remodeling</h2>
          <p>Our kitchen remodeling services are designed to create beautiful and functional kitchens that meet your needs. We use the best materials and modern designs to enhance your cooking experience.</p>
        </div>
        <div className="service-image">
          <img src={kitchenImg} alt="Kitchen Remodeling" />
        </div>
      </div>

      <div className="service">
        <div className="service-text">
          <h2>Basement Remodeling</h2>
          <p>Transform your basement into a livable space with our expert remodeling services. Whether you want a home theater, a gym, or an additional bedroom, we have the skills to make it happen.</p>
        </div>
        <div className="service-image">
          <img src={basementImg} alt="Basement Remodeling" />
        </div>
      </div>
    </div>
  );
};

export default Services;
