/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import EventList from '../components/EventList';
import LoadingSpinner from '../components/LoadingSpinner';
import FullWidthImage from '../components/FullWidthImage'; // Import the new component

// Import images
import event1 from '../assets/images/event1.jpg';
import event2 from '../assets/images/event2.jpg';
import event3 from '../assets/images/event3.jpg';
import event4 from '../assets/images/event4.jpg';
import event5 from '../assets/images/event5.jpg';
import event6 from '../assets/images/event6.jpg';
import event7 from '../assets/images/event7.jpg';
import event8 from '../assets/images/event8.jpg';
import event9 from '../assets/images/event9.jpg';
import event10 from '../assets/images/event10.jpg';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setEvents([
        { id: 1, name: 'Football Match A', image: event1, description: 'Join us for an exciting match between Team A and Team B. Don’t miss the action!' },
        { id: 2, name: 'Football Match B', image: event2, description: 'Team C takes on Team D in a high-stakes game. Come and support your favorite team!' },
        { id: 3, name: 'Football Match C', image: event3, description: 'An exhilarating game between Team E and Team F. Great plays and incredible goals await!' },
        { id: 4, name: 'Football Match D', image: event4, description: 'Watch as Team G faces Team H in a thrilling encounter. Expect intense action and drama!' },
        { id: 5, name: 'Football Match E', image: event5, description: 'Cheer on Team I as they go head-to-head with Team J in this must-see match!' },
        { id: 6, name: 'Football Match F', image: event6, description: 'Team K vs Team L. Witness a clash of titans and enjoy an unforgettable football experience!' },
        { id: 7, name: 'Football Match G', image: event7, description: 'Don’t miss Team M vs Team N. An exciting game with skillful players and dramatic moments!' },
        { id: 8, name: 'Football Match H', image: event8, description: 'Catch the match between Team O and Team P. A game full of action, goals, and unforgettable moments!' },
        { id: 9, name: 'Football Match I', image: event9, description: 'Team Q takes on Team R. Experience the thrill of competitive football in this exciting match!' },
        { id: 10, name: 'Football Match J', image: event10, description: 'The final showdown between Team S and Team T. A game you won’t want to miss!' },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <Banner />
      <main>
        {loading ? <LoadingSpinner /> : <EventList events={events} />}
      </main>
      <FullWidthImage /> {/* Use the new component */}
    </div>
  );
};

export default Home;
