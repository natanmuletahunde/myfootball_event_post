/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/Pagination.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-blue-500 text-white p-2 rounded-lg mx-1"
      >
        Previous
      </button>
      <span className="mx-2">{currentPage} / {totalPages}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-blue-500 text-white p-2 rounded-lg mx-1"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
