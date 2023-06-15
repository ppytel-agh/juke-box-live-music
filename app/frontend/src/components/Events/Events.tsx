import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Event from '../Event/Event'
import './Events.css';
import { Link, Route, Routes } from 'react-router-dom';

const eventTitles = [
  'Event 1',
  'Event 2',
  'Event 3',
  'Event 4',
  'Event 5',
  'Event 6',
  'Event 7',
  'Event 8',
  'Event 9',
  'Event 10',
];

const Events: React.FC = () => {

  const [events, setEvents] = useState([])

  const fetchEventsData = () => {
    fetch("http://localhost:8080/events")
      .then(response => { 
        return response.json() 
    })
      .then(data => { 
        setEvents(data)
    })
  }

  useEffect( () => {
    // fetchEventsData()
  }, [])

  const renderEventBoxes = () => {
    return eventTitles.map((title, index) => {
      if (index % 2 === 0) {
        return (
          <Row key={index} className="event-row">
          <Link to={`/wydarzenia/${index}`}>
            <Col className="d-flex justify-content-center">
              <div className="event-box">
                <p className="event-text">{title}</p>
              </div>
            </Col>
          </Link>
            {index + 1 < eventTitles.length && (
              <Link to={`/wydarzenia/${index + 1}`}>
                <Col className="d-flex justify-content-center">
                  <div className="event-box">
                    <p className="event-text">{eventTitles[index + 1]}</p>
                  </div>
                </Col>
              </Link>
            )}
          </Row>
        );
      }
      return null;
    });
  };

  return (
    <div
      className="events-container vh-100"
      style={{ backgroundColor: '#BFD2FF' }}
    >
      <Container>{renderEventBoxes()}</Container>
    </div>
  );
};

export default Events;
