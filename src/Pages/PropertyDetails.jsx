import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext.jsx';
import propertyService from '../Services/PropertyService.jsx';

const PropertyDetails = () => {
  const { token } = useContext(AuthContext);
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await propertyService.getProperty(id, token);
        setProperty(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProperty();
  }, [id, token]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{property.type}</h1>
      <p>{property.location}</p>
      <p>{property.price}</p>
      <p>{property.description}</p>
      <p>Status: {property.status}</p>
    </div>
  );
};

export default PropertyDetails;
