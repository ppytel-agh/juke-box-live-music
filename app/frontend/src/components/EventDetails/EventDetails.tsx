import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

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
        backgroundColor: '#D9E4FF',
        paddingTop: '48px',
      }}
    >
      <Container>
        <Card>
        <Card.Body>
          <Card.Title>{eventName}</Card.Title>
          <Card.Text>{eventDetails}</Card.Text>
          <Button variant="primary" onClick={handleBuyTickets}>
                Kup bilet
          </Button>
        </Card.Body>
        <Card.Img variant="bottom" src={imageUrl} />
        
      </Card>
      </Container>
    </div>
  );
};

export default EventDetails;
