/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto">
      <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{event.name}</h2>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <Link to={`/events/${event.id}`} className="block mt-4 text-blue-600 hover:underline text-lg">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
