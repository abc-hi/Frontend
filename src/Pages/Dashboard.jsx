import React, { useState } from 'react';
import PropertyForm from '../Components/PropertyForm.jsx';
import PropertyList from '../Components/PropertyList.jsx';
import SearchForm from '../Components/SearchForm.jsx';

const Dashboard = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <h1>Dashboard</h1>
      <PropertyForm />
      <PropertyList />
      <SearchForm setResults={setSearchResults} />
      <div>
        {searchResults.length > 0 && (
          <div>
            <h2>Search Results</h2>
            {searchResults.map((property) => (
              <div key={property._id}>
                <h3>{property.type}</h3>
                <p>{property.location}</p>
                <p>{property.price}</p>
                <p>{property.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
