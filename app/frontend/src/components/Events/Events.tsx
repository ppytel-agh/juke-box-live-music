import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Events.css';

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
  const renderEventBoxes = () => {
    return eventTitles.map((title, index) => {
      if (index % 2 === 0) {
        return (
          <Row key={index} className="event-row">
            <Col className="d-flex justify-content-center">
              <div className="event-box">
                <p className="event-text">{title}</p>
              </div>
            </Col>
            {index + 1 < eventTitles.length && (
              <Col className="d-flex justify-content-center">
                <div className="event-box">
                  <p className="event-text">{eventTitles[index + 1]}</p>
                </div>
              </Col>
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
