/* eslint-disable no-unused-vars */
// src/pages/RegisterPage.jsx
import React from 'react';
import LoginRegister from '../components/LoginRegister';

const RegisterPage = () => {
  const handleRegister = (data) => {
    console.log('Register Data:', data);
    // Handle registration logic here
  };

  return (
    <div className="container mx-auto p-4">
      <LoginRegister onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
