import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext.jsx';
import propertyService from '../Services/PropertyService.jsx';

const PropertyForm = () => {
  const { token } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    type: '',
    location: '',
    price: '',
    description: '',
  });

  const { type, location, price, description } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await propertyService.createProperty(formData, token);
      setFormData({ type: '', location: '', price: '', description: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="type" value={type} onChange={onChange} placeholder="Type" required />
      <input type="text" name="location" value={location} onChange={onChange} placeholder="Location" required />
      <input type="number" name="price" value={price} onChange={onChange} placeholder="Price" required />
      <textarea name="description" value={description} onChange={onChange} placeholder="Description"></textarea>
      <button type="submit">Add Property</button>
    </form>
  );
};

export default PropertyForm;
