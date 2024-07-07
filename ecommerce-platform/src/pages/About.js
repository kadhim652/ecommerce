import React from 'react';
import '../styles/About.css';
import logo from '../logo.PNG'; // Adjust the import path as necessary

const About = () => {
  const boldText = (text) => {
    const parts = text.split(/(Modern Edge Solutions)/g);
    return parts.map((part, index) =>
      part === "Modern Edge Solutions" ? <strong key={index}>{part}</strong> : part
    );
  };

  const paragraph1 = "Modern Edge Solutions is your go-to contracting firm and professional general contractor when it comes to offering satisfactory residential and commercial remodels at cost-effective rates. We have an excellent track record of completing jobs without missing deadlines, and this has endeared our brand to our teeming clients. We have a verified history of delivering quality service and penchant for excellence, as the satisfaction of our customers has always been our priority. A quick check on review from Google about our brand will give you a glimpse of our commitment to excellence and customer satisfaction.";
  const paragraph2 = "Irrespective of the project size, the satisfaction of our clientele remains a primary concern to us. That is why we have “No project is too small” as our slogan. At Modern Edge Solutions, we are dependable general contractors, and we have the competence and capacity to handle commercial and residential projects, and these include Flipping Houses, Basement Remodeling, Bathroom Remodeling, Kitchen Remodeling, Handyman service, Drywall Repair and Refinishing, Paint, Concrete & Masonry, Doors Installment, Windows Installation, Fences & Gates, Deck, Maintenance Service, Flooring, Demolition, Carpenter, Gutters installation, and maintenance services for homeowners and property management companies.";

  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="about-content">
        <div className="left-column">
          <img src={logo} alt="Logo" />
        </div>
        <div className="right-column">
          <p>{boldText(paragraph1)}</p>
          <p>{boldText(paragraph2)}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
