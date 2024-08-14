/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import EventList from '../components/EventList';
import FilterSidebar from '../components/FilterSidebar';
import LoadingSpinner from '../components/LoadingSpinner';

// Import images
import event1 from '../assets/images/event1.jpg';
import event2 from '../assets/images/event2.jpg';
import event3 from '../assets/images/event3.jpg';
import event4 from '../assets/images/event4.jpg';
import event5 from '../assets/images/event5.jpg';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data with detailed descriptions and images
    setTimeout(() => {
      setEvents([
        {
          id: 1,
          title: 'Football Match A',
          date: '2024-08-15',
          location: 'Stadium A',
          description: `
            The highly anticipated match between Team Alpha and Team Beta at Stadium A. 
            Team Alpha, with its star striker in top form, is expected to dominate. 
            Team Beta will rely on its solid defense and strategic play to secure a win. 
            Expect a high-energy game with plenty of action and drama.
          `,
          image: event1,
        },
        {
          id: 2,
          title: 'Football Match B',
          date: '2024-08-20',
          location: 'Stadium B',
          description: `
            Stadium B will host the thrilling clash between Team Gamma and Team Delta. 
            Team Gamma has been on a winning streak and is looking to extend its run. 
            Team Delta, known for its quick counter-attacks, will aim to exploit any weaknesses. 
            Fans are in for an exciting and unpredictable match.
          `,
          image: event2,
        },
        {
          id: 3,
          title: 'Football Match C',
          date: '2024-08-25',
          location: 'Stadium C',
          description: `
            The match at Stadium C features Team Epsilon against Team Zeta. 
            Team Epsilon has had a mixed season, but their recent performances have shown promise. 
            Team Zeta, with its strong midfield, will be looking to control the game. 
            Expect a tactical battle with both teams trying to assert dominance.
          `,
          image: event3,
        },
        {
          id: 4,
          title: 'Football Match D',
          date: '2024-09-01',
          location: 'Stadium D',
          description: `
            Stadium D will be the venue for the exciting match between Team Eta and Team Theta. 
            Team Eta, known for its attacking prowess, will be facing Team Theta, which is strong defensively. 
            The game promises to be a clash of styles, with Team Eta's offense going up against Team Theta's defense.
          `,
          image: event4,
        },
        {
          id: 5,
          title: 'Football Match E',
          date: '2024-09-10',
          location: 'Stadium E',
          description: `
            The final match at Stadium E will showcase Team Iota versus Team Kappa. 
            Team Iota has been in impressive form, while Team Kappa has struggled recently. 
            This game is crucial for Team Kappa to turn their season around. Expect a fiercely contested match as both teams fight for victory.
          `,
          image: event5,
        },
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
