import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const EventDetails = () => {
  const eventName = 'Example Event'; // Replace with actual event name
  const eventDetails =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  const handleBuyTickets = () => {};

  const imageUrl =
    'https://cdn.thetealmango.com/wp-content/uploads/2023/01/RF23_1.jpg';

  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: '#f7eceb',
        paddingTop: '48px',
      }}
    >
      <Container>
        <Row>
          <Col md={6}>
            <div>
              <h2>{eventName}</h2>
              <p>{eventDetails}</p>
              <Button variant="primary" onClick={handleBuyTickets}>
                Kup bilet
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <img src={imageUrl} alt="Event" style={{ width: '100%' }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EventDetails;
