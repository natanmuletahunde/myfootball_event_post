/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/Notification.jsx
import React from 'react';

const Notification = ({ message, type }) => {
  const bgColor = type === 'error' ? 'bg-red-500' : 'bg-green-500';

  return (
    <div className={`${bgColor} text-white p-4 rounded-lg mb-4`}>
      {message}
    </div>
  );
};

export default Notification;
