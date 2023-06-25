import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useToken from '../../hooks/useToken';
import { useLocation } from 'react-router-dom';

const EventForm = () => {
  const [selectedValue, setSelectedValue] = useState('1');
  const [selectedType, setSelectedType] = useState('100');

  const { getToken, token } = useToken();
  const id = useLocation().pathname.split('/')[2];

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const userToken: any = JSON.parse(token ?? '');
      const id_koncertu = id;
      const liczba_biletow = selectedValue;
      const koszt_calkowity = selectedType;

      const requestBody = {
        token: userToken,
        id_koncertu,
        liczba_biletow,
        koszt_calkowity,
      };

      // TODO fix the request
      // const res = await fetch('http://localhost:8080/api/add-new-booking', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     authorization: `${JSON.parse(getToken() ?? '')}`,
      //   },
      //   body: JSON.stringify(requestBody),
      // });
      //
      // alert('Udało się kupić bilet!');
      // window.location.replace('/kupiono-bilet');
    } catch (err) {
      alert(err);
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
      <h2>Kup bilet!</h2>
      <Form>
        <Form.Group controlId="iloscBiletow">
          <Form.Label className="mt-3">Ilość biletów</Form.Label>
          <Form.Control
            as="select"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            {[...Array(10)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="iloscBiletow">
          <Form.Label className="mt-3">Rodzaj</Form.Label>
          <Form.Control
            as="select"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="100">Standard - 100 zł</option>
            <option value="200">Premium - 200 zł</option>
            <option value="300">VIP - 300 zł</option>
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
