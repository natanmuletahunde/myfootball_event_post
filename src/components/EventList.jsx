/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import EventCard from './EventCard';

const EventList = ({ events }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
