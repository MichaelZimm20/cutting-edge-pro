import React from 'react';
import { Container } from 'react-bootstrap';

function Success() {
  setTimeout(() => {
    window.location.assign('/home');
  }, 3000);

  return (
    <Container className='text-center'>
      <h1>Success!</h1>
      <h2>Thank you for your purchase!</h2>
      <h2>You will now be redirected to the home page</h2>
    </Container>
  );
}

export default Success;
