import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();

    const product = {
        id,
        name: `Product ${id}`,
        description: `Description for product ${id}`,
        price: 10 * id,
        imageUrl: `path/to/image${id}.jpg`,
    };

    return (
        <div className="product-detail">
            <h1>{product.name}</h1>
            <img src={product.imageUrl} alt={product.name} /> 
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductDetail;