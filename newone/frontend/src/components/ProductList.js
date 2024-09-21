import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products/')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>Original Price: {product.original_price}</p>
            <p>Offer Price: {product.offer_price}</p>
            <h4>Seller: {product.seller.name}</h4>
            <img src={product.seller.logo} alt={product.seller.name} />
            <p>Rating: {product.seller.rating}/5</p>
            <p>Warranty: {product.seller.warranty_offer}</p>
            <h4>Reviews:</h4>
            {product.reviews.map(review => (
              <div key={review.id}>
                <h5>{review.title}</h5>
                <img src={review.image} alt={review.title} />
                <p>{review.short_description}</p>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
