import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext.jsx';
import propertyService from '../Services/PropertyService.jsx';

const SearchForm = ({ setResults }) => {
  const { token } = useContext(AuthContext);
  const [searchData, setSearchData] = useState({
    location: '',
    priceMin: '',
    priceMax: '',
    type: '',
  });

  const { location, priceMin, priceMax, type } = searchData;

  const onChange = e => setSearchData({ ...searchData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await propertyService.searchProperties(searchData, token);
      setResults(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="location" value={location} onChange={onChange} placeholder="Location" />
      <input type="number" name="priceMin" value={priceMin} onChange={onChange} placeholder="Min Price" />
      <input type="number" name="priceMax" value={priceMax} onChange={onChange} placeholder="Max Price" />
      <input type="text" name="type" value={type} onChange={onChange} placeholder="Type" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
