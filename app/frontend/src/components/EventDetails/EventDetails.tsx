import React, { useState } from 'react';
import { Button, Card, Col, Container, Image, Nav, Row } from 'react-bootstrap';

const EventDetails = () => {
  const handleBuyTickets = () => {};

  // TODO: Fetch and set event
  const [eventData, setEventData] = useState({
    name: 'Example Event',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgUrl:
      'https://cdn.thetealmango.com/wp-content/uploads/2023/01/RF23_1.jpg',
    id: '0',
  });

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
            <Card.Title>{eventData.name}</Card.Title>
            <Card.Text>{eventData.details}</Card.Text>
            <Nav.Link href={`/kup-bilet/${eventData.id}`}>
              <Button variant="primary" onClick={handleBuyTickets}>
                Kup bilet
              </Button>
            </Nav.Link>
          </Card.Body>
          <Card.Img
            variant="bottom"
            src={eventData.imgUrl}
            style={{ height: '550px' }}
          />
        </Card>
      </Container>
    </div>
  );
};

export default EventDetails;
