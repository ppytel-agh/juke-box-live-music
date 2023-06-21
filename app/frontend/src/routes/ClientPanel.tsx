import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Header from '../components/Header/Header';

const ClientPanel = () => {
  const isLogged = false;

  //TODO: fetch events and adjust list
  const userEvents = [
    'Wydarzenie 1',
    'Wydarzenie 2',
    'Wydarzenie 3',
    'Wydarzenie 4',
    'Wydarzenie 5',
  ];

  return (
    <>
      <Header isLogged={isLogged} />
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
              {userEvents.map((event, index) => (
                <ListGroup.Item key={index}>{event}</ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ClientPanel;
