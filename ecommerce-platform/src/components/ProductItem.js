import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {
    return (
        <div className="product-item">
            <Link to={`/product/${product.id}`}>
                <img src={product.imageUrl} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
            </Link>
        </div>
    );
};

export default ProductItem;