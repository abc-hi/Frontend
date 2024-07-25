import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext.jsx';
import propertyService from '../Services/PropertyService.jsx';

const PropertyList = () => {
  const { token } = useContext(AuthContext);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await propertyService.getProperties(token);
        setProperties(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProperties();
  }, [token]);

  const deleteProperty = async id => {
    try {
      await propertyService.deleteProperty(id, token);
      setProperties(properties.filter(property => property._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {properties.map(property => (
        <div key={property._id}>
          <h3>{property.type}</h3>
          <p>{property.location}</p>
          <p>{property.price}</p>
          <p>{property.description}</p>
          <button onClick={() => deleteProperty(property._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
