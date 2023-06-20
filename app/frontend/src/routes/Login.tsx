import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Header from '../components/Header/Header';

const LoginPage = () => {

  const [loginData, setLoginData] = useState({ email: '', haslo: '' })

  const isLogged = false;

  const onFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLButtonElement;

    const name = target.name;
    const value = target.value;

    setLoginData({ ...loginData, [name]: value });
  };

  const login = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const res = await
      fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      })

      alert("Udało się zalogować!")
      window.location.replace('/')
    }
    catch(err) {
        alert(err)
      }
  }

  return (
    <>
    <Header isLogged={isLogged}/>
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
            controlId="formBasicUsername"
            className="d-flex flex-column align-items-start my-3"
          >
            <Form.Label>nazwa_uzytkownika</Form.Label>
            <Form.Control type="email" name='nazwa_uzytkownika' onChange={onFormChange}/>
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
    </>
  );
};

export default LoginPage;
