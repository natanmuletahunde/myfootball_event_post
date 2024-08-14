/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        className="border rounded-lg p-2"
        placeholder="Search events..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-lg ml-2"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
