/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/LoginRegister.jsx
import React, { useState } from 'react';

const LoginRegister = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Login/Register</h2>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="border rounded-lg p-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="border rounded-lg p-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginRegister;
