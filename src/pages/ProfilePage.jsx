/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Profile from '../components/Profile';

// Sample recent activities data
const recentActivities = [
  { id: 1, activity: 'Commented on Football Match A' },
  { id: 2, activity: 'Liked Football Match B' },
  { id: 3, activity: 'Shared Football Match C' },
];

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetching user data
    setTimeout(() => {
      setUser({
        email: 'natanmuleta@911gmail.com',
        joinedDate: '2024-01-01',
        name: 'PIV NATI',  // Additional user data
        bio: 'Football enthusiast and sports lover. Always excited about new matches!', // User bio
      });
    }, 1000);
  }, []);

  const handleEditProfile = () => {
    // Handle edit profile logic
    alert('Edit Profile functionality is not implemented yet.');
  };

  const handleLogout = () => {
    // Handle logout logic
    alert('Logout functionality is not implemented yet.');
  };

  return (
    <div className="container mx-auto p-4">
      {user ? (
        <div className="flex flex-col items-center">
          {/* Profile component */}
          <Profile user={user} />

          {/* User Details */}
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-400">Joined: {user.joinedDate}</p>
            <p className="mt-2 text-gray-700">{user.bio}</p>
          </div>

          {/* Recent Activities */}
          <div className="mt-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-2">Recent Activities</h3>
            <ul className="list-disc pl-5 space-y-1">
              {recentActivities.map(activity => (
                <li key={activity.id} className="text-gray-800">{activity.activity}</li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="mt-6 space-x-4">
            <button
              onClick={handleEditProfile}
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
            >
              Edit Profile
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;
