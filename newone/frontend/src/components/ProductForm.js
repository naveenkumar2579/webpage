import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    image: null,
    description: '',
    original_price: '',
    offer_price: '',
    seller_name: '',
    seller_logo: null,
    seller_rating: '',
    warranty_offer: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = new FormData();
    for (const key in formData) {
      productData.append(key, formData[key]);
    }

    axios.post('http://127.0.0.1:8000/api/products/', productData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit} >
      <label>Title:</label>
      <input type="text" name="title" onChange={handleInputChange} />


      <label>Image:</label>
      <input type="file" name="image" onChange={handleFileChange} />

      <label>Description:</label>
      <textarea name="description" onChange={handleInputChange} />

      <label>Original Price:</label>
      <input type="text" name="original_price" onChange={handleInputChange} />

      <label>Offer Price:</label>
      <input type="text" name="offer_price" onChange={handleInputChange} />

      <label>Seller Name:</label>
      <input type="text" name="seller_name" onChange={handleInputChange} />

      <label>Seller Logo:</label>
      <input type="file" name="seller_logo" onChange={handleFileChange} />

      <label>Seller Rating:</label>
      <input type="text" name="seller_rating" onChange={handleInputChange} />

      <label>Warranty Offer:</label>
      <input type="text" name="warranty_offer" onChange={handleInputChange} />

      <button type="submit">Create Product</button>
    </form>
  );
};

export default ProductForm;
