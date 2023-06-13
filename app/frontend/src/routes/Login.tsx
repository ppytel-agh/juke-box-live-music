import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginPage = () => {

  const [loginData, setLoginData] = useState({ email: '', haslo: '' })

  const onFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLButtonElement;

    const name = target.name;
    const value = target.value;

    setLoginData({ ...loginData, [name]: value });
  };

  const login = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // URL?
    try {
      const res = await
      fetch('localhost:8080/login', {
        method: 'POST',
        headers: new Headers(),
        body: JSON.stringify(loginData)
      })

      alert(res.json())
      window.location.replace('/')
    }
    catch(err) {
        alert(err)
      }
  }

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
            <Form.Control type="email" name='email' onChange={onFormChange}/>
          </Form.Group>

          <Form.Group
            controlId="formBasicPassword"
            className="d-flex flex-column align-items-start my-3"
          >
            <Form.Label>Hasło</Form.Label>
            <Form.Control type="password" name='haslo' onChange={onFormChange}/>
          </Form.Group>

          <Button variant="primary" type="submit"  onClick={login}>
            Zaloguj się
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
