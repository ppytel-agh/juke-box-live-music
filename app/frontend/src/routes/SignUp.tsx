import React from 'react';
import { Form, Button } from 'react-bootstrap';

const SignUp = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ backgroundColor: '#BFD2FF' }}
    >
      <div className="text-center">
        <h1>Rejestracja</h1>
        <h2>Korzystaj z naszych usług za darmo</h2>
        <Form>
          <Form.Group
            controlId="formBasicEmail"
            className="d-flex flex-column align-items-start my-3"
          >
            <Form.Label>Imię</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group
            controlId="formBasicLastName"
            className="d-flex flex-column align-items-start my-3"
          >
            <Form.Label>Nazwisko</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group
            controlId="formBasicEmail"
            className="d-flex flex-column align-items-start my-3"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group
            controlId="formBasicPassword"
            className="d-flex flex-column align-items-start my-3"
          >
            <Form.Label>Hasło</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Form.Group
            controlId="formBasicPassword"
            className="d-flex flex-column align-items-start my-3"
          >
            <Form.Label>Powtórz hasło</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Zarejstruj się
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
