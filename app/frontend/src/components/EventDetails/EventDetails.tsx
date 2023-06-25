import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Nav, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const eventTitles = [
  {
    id_koncertu: '1',
    nazwa_koncertu: 'Rock Fest 2023',
    data_koncertu: 1679865600000, // Unix timestamp in milliseconds
    imageUrl:
      'https://cdn.thetealmango.com/wp-content/uploads/2023/01/RF23_1.jpg',
  },
  {
    id_koncertu: '2',
    nazwa_koncertu: 'Jazz Night Live',
    data_koncertu: 1677628800000,
    imageUrl:
      'https://www.ripleyaquariums.com/canada/files/2022/04/Jazz-Night-2000-×-650-px.jpg',
  },
  {
    id_koncertu: '3',
    nazwa_koncertu: 'Pop Extravaganza',
    data_koncertu: 1682227200000,
    imageUrl:
      'https://www.gaytimes.co.uk/wp-content/uploads/2023/06/Mighty-Hoopla-1-1466x854.jpg',
  },
  {
    id_koncertu: '4',
    nazwa_koncertu: 'Indie Showcase',
    data_koncertu: 1684320000000,
    imageUrl:
      'https://images.squarespace-cdn.com/content/61922b78dba6a477184fb180/9a674abf-5310-4f34-881c-667fb7a3b441/blue_.png?format=1500w&content-type=image%2Fpng',
  },
  {
    id_koncertu: '5',
    nazwa_koncertu: 'Classical Symphony',
    data_koncertu: 1685203200000,
    imageUrl:
      'https://www.cmuse.org/wp-content/uploads/2018/05/characteristics-of-classical-music.jpg',
  },
  // Add more objects for the remaining events
  {
    id_koncertu: '10',
    nazwa_koncertu: 'Electronic Party',
    data_koncertu: 1698435200000,
    imageUrl:
      'https://i1.sndcdn.com/artworks-y8mh3LR4Em6XKL37-0fO34Q-t500x500.jpg',
  },
];

const EventDetails = () => {
  const [eventData, setEventData] = useState<any>({});

  const id = useLocation().pathname.split('/')[2];

  const fetchEventsData = () => {
    fetch(`http://localhost:8080/api/events/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const eventsWithImageUrl = {
          ...data,
          imageUrl: eventTitles[data.id_koncertu - 1].imageUrl,
        };
        setEventData(eventsWithImageUrl);
      });
  };

  useEffect(() => {
    fetchEventsData();
  }, []);

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
            <Card.Title>{eventData.nazwa_koncertu}</Card.Title>
            <Card.Text>
              {eventData.data_koncertu} | {eventData.artysta?.nazwa_artysty}
            </Card.Text>
            <Card.Text> {eventData.artysta?.opis_artysty} </Card.Text>
            <Nav.Link href={`/kup-bilet/${id}`}>
              <Button variant="primary">Kup bilet</Button>
            </Nav.Link>
          </Card.Body>
          <Card.Img
            variant="bottom"
            src={eventData.imageUrl}
            style={{ height: '550px' }}
          />
        </Card>
      </Container>
    </div>
  );
};

export default EventDetails;
