/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const EventList = ({ events }) => {
  return (
    <div className="space-y-4">
      {events.map(event => (
        <div key={event.id} className="border border-gray-300 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">{event.title}</h2>
          <p className="text-gray-600">Date: {event.date}</p>
          <p className="text-gray-600">Location: {event.location}</p>
          <div className="mt-2 text-gray-800">
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;
