import React from 'react';
import Header from '../components/Header/Header';

const TicketSuccess = () => {
  const isLogged = false;
  return (
    <>
      <Header isLogged={isLogged} />
      <div
        className="d-flex flex-column align-items-center  vh-100"
        style={{
          height: '100vh',
          backgroundColor: '#D9E4FF',
          paddingTop: '180px',
        }}
      >
        <div style={{ width: '500px' }}>
          {' '}
          <h1>Udało ci się zamówić bilet!</h1>
          <h3 className="mt-4">
            Twój bilet został wysłany na maila. Pobierz go i już teraz ciesz się
            nadchodzącym wydarzeniem!
          </h3>
        </div>
      </div>
    </>
  );
};

export default TicketSuccess;
