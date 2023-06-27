import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Header from '../components/Header/Header';
import useToken from '../hooks/useToken';

const ClientPanel = () => {
  const [events, setEvents] = useState([]);

  const {getToken} = useToken()

  const fetchEventsData = () => {
    fetch('http://localhost:8080/api/user-events', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `${JSON.parse(getToken() ?? '')}`
      },
    }) 
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEvents(data);
      });
  };

  useEffect(() => {
    fetchEventsData()
  }, []);

  let userEvents = events

  return (
    <>
      <Header />
      <Container
        fluid
        className="vh-100"
        style={{ backgroundColor: '#D9E4FF' }}
      >
        <Row
          className="justify-content-center vh-100"
          style={{ paddingTop: '200px' }}
        >
          <Col xs={12} md={6}>
            <h1 className="text-center">Panel klienta</h1>
            <ListGroup>
              {userEvents.map((event: any, index) => (
                <ListGroup.Item key={index}>
                  {event.koncert.nazwa_koncertu}
                  <br/>
                  {event.koncert.data_koncertu} 
                  <br/>
                  {event.koncert.artysta.nazwa_artysty + ' - '} 
                  {event.koncert.artysta.opis_artysty} 
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ClientPanel;
