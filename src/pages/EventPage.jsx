/* eslint-disable no-unused-vars */
// src/pages/EventPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EventDetails from '../components/EventDetails';
import RSVPForm from '../components/RsvpForm';
import LoadingSpinner from '../components/LoadingSpinner';

const EventPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching event details
    setTimeout(() => {
      const fetchedEvent = { id, title: 'Football Match A', date: '2024-08-15', location: 'Stadium A', description: 'Detailed Description' };
      setEvent(fetchedEvent);
      setLoading(false);
    }, 1000);
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {loading ? <LoadingSpinner /> : (
        <>
          <EventDetails event={event} />
          <RSVPForm eventId={event.id} onRSVP={(data) => console.log('RSVP Data:', data)} />
        </>
      )}
    </div>
  );
};

export default EventPage;
