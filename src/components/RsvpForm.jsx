/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/RSVPForm.jsx
import React, { useState } from 'react';

const RsvpForm = ({ eventId, onRsvp }) => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRsvp({ eventId, name, guests });
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">RSVP</h2>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            className="border rounded-lg p-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Number of Guests</label>
          <input
            type="number"
            className="border rounded-lg p-2 w-full"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg"
        >
          RSVP
        </button>
      </form>
    </div>
  );
};

export default RsvpForm;
