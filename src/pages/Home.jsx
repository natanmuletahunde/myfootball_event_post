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
    setTimeout(() => {
      setEvents([
        {
          id: 1,
          name: 'Barcelona vs Real Madrid',
          image: event1,
          description: 'Watch the epic clash between Barcelona and Real Madrid. Expect intense rivalry and top-tier football!'
        },
        {
          id: 2,
          name: 'Liverpool vs Manchester United',
          image: event2,
          description: 'An exciting encounter between Liverpool and Manchester United. Don’t miss this high-stakes match!'
        },
        {
          id: 3,
          name: 'Bayern Munich vs Borussia Dortmund',
          image: event3,
          description: 'A thrilling game between Bayern Munich and Borussia Dortmund. A match full of action and drama!'
        },
        {
          id: 4,
          name: 'Paris Saint-Germain vs Chelsea',
          image: event4,
          description: 'Watch as Paris Saint-Germain takes on Chelsea in this exciting fixture. Expect quality football and dramatic moments!'
        },
        {
          id: 5,
          name: 'Juventus vs AC Milan',
          image: event5,
          description: 'The Italian giants Juventus and AC Milan face off in a highly anticipated match. Witness the clash of these football titans!'
        },
        {
          id: 6,
          name: 'Ajax vs PSV Eindhoven',
          image: event6,
          description: 'Ajax goes head-to-head with PSV Eindhoven in an exciting Dutch league match. A game filled with skillful plays and goals!'
        },
        {
          id: 7,
          name: 'Atletico Madrid vs Sevilla',
          image: event7,
          description: 'Don’t miss the action as Atletico Madrid takes on Sevilla. A match with passionate football and tactical battles!'
        },
        {
          id: 8,
          name: 'Inter Milan vs AS Roma',
          image: event8,
          description: 'Catch the intense match between Inter Milan and AS Roma. A clash featuring some of the best players in Serie A!'
        },
        {
          id: 9,
          name: 'Porto vs Benfica',
          image: event9,
          description: 'The Portuguese giants Porto and Benfica face each other in a thrilling encounter. A must-watch match for football fans!'
        },
        {
          id: 10,
          name: 'Galatasaray vs Fenerbahce',
          image: event10,
          description: 'The Istanbul derby between Galatasaray and Fenerbahce promises to be a spectacle. Expect high energy and fierce competition!'
        },
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
