import React from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ backgroundColor: '#BFD2FF' }}
    >
      <div className="text-center">
        <h1>Logowanie</h1>
        <Form>
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

          <Button variant="primary" type="submit">
            Zaloguj się
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
