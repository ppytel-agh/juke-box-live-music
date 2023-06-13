import React, { ChangeEvent, MouseEvent, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SignUp = () => {

  const [signUpData, setSignUpData] = useState({nazwa_uzytkownika: '', email: '', haslo: ''})

  const onFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLButtonElement;

    const name = target.name;
    const value = target.value;

    setSignUpData({ ...signUpData, [name]: value });
  };

  const signUp = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // URL?
    try {
      const res = await
      fetch('localhost:8080/register-new-user', {
        method: 'POST',
        headers: new Headers(),
        body: JSON.stringify(signUpData)
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
        <h1>Rejestracja</h1>
        <h2>Korzystaj z naszych usług za darmo</h2>
        <Form>
          <Form.Group
            controlId="formBasicFirstName"
            className="d-flex flex-column align-items-start my-3"
          >
            <Form.Label>Imię</Form.Label>
            <Form.Control type="text" name='nazwa_uzytkownika' onChange={onFormChange}/>
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
            <Form.Control type="email" name='email' onChange={onFormChange}/>
          </Form.Group>

          <Form.Group
            controlId="formBasicPassword"
            className="d-flex flex-column align-items-start my-3"
          >
            <Form.Label>Hasło</Form.Label>
            <Form.Control type="password" name='haslo' onChange={onFormChange}/>
          </Form.Group>

          <Form.Group
            controlId="formBasicPasswordRepeat"
            className="d-flex flex-column align-items-start my-3"
          >
            <Form.Label>Powtórz hasło</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={signUp}>
            Zarejstruj się
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
