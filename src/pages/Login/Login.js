import React from 'react';

// Styles
import { Container, BackgroundImage } from './LoginStyles';

// Components
import LoginFormContainer from './LoginForm/LoginForm';

// Assets
const image = require('~/assets/bg.jpg');

export default function Login() {
  return (
    <div>
      <Container>
        <LoginFormContainer />
      </Container>
      <BackgroundImage src={image} />
    </div>
  );
}
