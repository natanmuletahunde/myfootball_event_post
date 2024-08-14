/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/FilterSidebar.jsx
import React from 'react';
const FilterSidebar = ({ filters, onFilterChange }) => {
  return (
    <div className="p-4 bg-gray-100 w-64">
      <h3 className="font-bold mb-4">Filters</h3>
      {/* Example filter */}
      <div className="mb-4">
        <label className="block">Date</label>
        <input
          type="date"
          onChange={(e) => onFilterChange('date', e.target.value)}
          className="border rounded-lg p-2 w-full"
        />
      </div>
      {/* Add more filters as needed */}
    </div>
  );
};

export default FilterSidebar;
