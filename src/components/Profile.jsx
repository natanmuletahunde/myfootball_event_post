/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/Profile.jsx
import React from 'react';

const Profile = ({ user }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Profile</h2>
      <p>Email: {user.email}</p>
      <p>Joined: {user.joinedDate}</p>
      {/* Add more user details as needed */}
    </div>
  );
};

export default Profile;
