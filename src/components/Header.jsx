/* eslint-disable no-unused-vars */
// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Football Events</Link>
        <nav>
          <Link to="/" className="px-4">Home</Link>
          <Link to="/events" className="px-4">Events</Link>
          <Link to="/login" className="px-4">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
