import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import Event from '../Event/Event';
import './Events.css';
import { Link, Route, Routes } from 'react-router-dom';

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

const Events: React.FC = () => {
  const [events, setEvents] = useState([]);

  const fetchEventsData = () => {
    fetch('http://localhost:8080/api/events')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const eventsWithImageUrl = data.map((event: any, index: any) => ({
          ...event,
          imageUrl: eventTitles[index % eventTitles.length].imageUrl
        }));
        setEvents(eventsWithImageUrl);
      });
  };

  useEffect(() => {
    fetchEventsData()
  }, []);

  console.log(events);
  

  const formatDate = (dateToFormat: number) => {
    const date = new Date(dateToFormat);

    const day = ('0' + date.getDate()).slice(-2); // Get day (1-31), prepend 0 if needed
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Get month (0-11, so we add 1), prepend 0 if needed
    const year = date.getFullYear(); // Get full year

    const formattedDate = `${day}-${month}-${year}`; // Format the date
    return formattedDate;
  };

  return (
    <div className="events-container">
      <Container>
        <div className="grid-container">
          {events.map(
            ({ nazwa_koncertu, data_koncertu, imageUrl, id_koncertu }, index) => (
              <Link to={`/wydarzenia/${id_koncertu}`} key={index}>
                <Card style={{ width: '18rem' }}>
                  {/* <Card.Img
                    variant="top"
                    src={imageUrl}
                    style={{ height: '140px' }}
                  /> */}
                  <Image src={imageUrl} thumbnail style={{ height: '140px' }} />
                  <Card.Body>
                    <Card.Title>{nazwa_koncertu}</Card.Title>
                    <Card.Text>{formatDate(data_koncertu)}</Card.Text>
                    <Button variant="primary">Zobacz szczegóły</Button>
                  </Card.Body>
                </Card>
              </Link>
            )
          )}
        </div>
      </Container>
    </div>
  );
};

export default Events;
