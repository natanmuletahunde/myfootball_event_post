/* eslint-disable no-unused-vars */
// src/pages/EventsPage.jsx
import React, { useState, useEffect } from 'react';
import EventList from '../components/EventList';
import FilterSidebar from '../components/FilterSidebar';
import LoadingSpinner from '../components/LoadingSpinner';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setEvents([
        { id: 1, title: 'Football Match A', date: '2024-08-15', location: 'Stadium A', description: 'Description A' },
        { id: 2, title: 'Football Match B', date: '2024-08-20', location: 'Stadium B', description: 'Description B' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  return (
    <div className="flex">
      <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
      <div className="flex-1 p-4">
        {loading ? <LoadingSpinner /> : <EventList events={events} />}
      </div>
    </div>
  );
};

export default EventsPage;
