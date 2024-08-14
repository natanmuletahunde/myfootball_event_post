/* eslint-disable no-unused-vars */
// src/pages/LoginPage.jsx
import React from 'react';
import LoginRegister from '../components/LoginRegister';

const LoginPage = () => {
  const handleLogin = (data) => {
    console.log('Login Data:', data);
    // Handle login logic here
  };

  return (
    <div className="container mx-auto p-4">
      <LoginRegister onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
