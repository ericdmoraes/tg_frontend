import React from 'react';

// Styles
import { BackgroundImage, Container } from './SignUpStyles';

// Components
import SignUpForm from './SignUpForm/SignUpForm';

// Assets
const logo = require('~/assets/bg.jpg');

export default function Login() {
  return (
    <>
      <Container>
        <SignUpForm />
      </Container>
      <BackgroundImage src={logo} />
    </>
  );
}
