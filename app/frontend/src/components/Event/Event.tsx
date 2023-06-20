import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Event.css';
import { useLocation } from 'react-router-dom';

const Events = () => {
  const [event, setEvent] = useState([]);

  const id = useLocation().pathname.split('/')[2];

  const fetchEventsData = () => {
    fetch(`http://localhost:8080/events/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEvent(data);
      });
  };

  useEffect(() => {
    // fetchEventsData()
  }, []);

  return (
    <div className="events-container" style={{ backgroundColor: '#BFD2FF' }}>
      <Container>{event}</Container>
    </div>
  );
};

export default Events;
