/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/EventDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = ({ events }) => {
  const { id } = useParams();
  const event = events.find(e => e.id === id);

  if (!event) return <p>Event not found.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <p className="text-gray-600">{event.date}</p>
      <p className="text-gray-800">{event.location}</p>
      <p className="mt-4">{event.description}</p>
    </div>
  );
};

export default EventDetails;
