import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useToken from '../../hooks/useToken';

const EventForm = () => {
  const [selectedValue, setSelectedValue] = useState('');
  
  const {getToken} = useToken()

  const handleBuyTickets = async () => {
    const res = await
      fetch('http://localhost:8080/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `${JSON.parse(getToken() ?? '')}`
        },
        body: selectedValue
      })
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    try{
      // 

      alert("Udało się kupić bilet!")
      window.location.replace('/kupiono-bilet');
    }
    catch(err) {
      alert(err)
    }
  };

  return (
    <div
      className="d-flex flex-column align-items-center  vh-100"
      style={{
        height: '100vh',
        backgroundColor: '#D9E4FF',
        paddingTop: '180px',
      }}
    >
      <h2>Nazwa koncertu</h2>
      <Form>
        <Form.Group controlId="imie">
          <Form.Label className="mt-3">Imię</Form.Label>
          <Form.Control type="text" placeholder="Wpisz swoje imię" />
        </Form.Group>

        <Form.Group controlId="nazwisko">
          <Form.Label className="mt-3">Nazwisko</Form.Label>
          <Form.Control type="text" placeholder="Wpisz swoje nazwisko" />
        </Form.Group>

        <Form.Group controlId="iloscBiletow">
          <Form.Label className="mt-3">Ilość biletów</Form.Label>
          <Form.Control as="select" value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
            {[...Array(10)].map((_, index) => (
              <option key={index + 1} value={index + 1}>{index + 1}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button
          type="button"
          variant="primary"
          className="mt-4"
          onClick={handleSubmit}
        >
          Kup teraz
        </Button>
      </Form>
    </div>
  );
};

export default EventForm;
