import React, { useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Third Components
import Snackbar from '@material-ui/core/Snackbar';

// Form
import { Form } from '@unform/web';

// Store
import {
  signInRequest,
  signFailure,
} from '../../../store/modules/auth/actions';

// Components
import Alert from '../../../_Components/Alert/Alert';

// Services
import navigateTo from '../../../utils/Services/NavigationServices/navigate';

// Styles
import {
  Container,
  HeaderContainer,
  Icon,
  Title,
  FieldsContainer,
  Label,
  Input,
  Button,
  ButtonContainer,
  LabelForgotPassword,
  UtilsContainer,
  LabelSignup,
} from './LoginFormStyles';

// Assets
const logo = require('~/assets/logo.png');

export default function LoginForm() {
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.auth);

  const handleSubmit = async ({ email, password }) => {
    dispatch(signInRequest(email, password));
  };

  const handleClick = () => {
    return navigateTo('/register');
  };

  const handleClose = () => {
    dispatch(signFailure(false));
  };

  return (
    <Container>
      <img src={logo} />
      <Form onSubmit={handleSubmit}>
        <HeaderContainer>
          <Title>Entrar</Title>
        </HeaderContainer>

        <FieldsContainer>
          <Label>E-mail:</Label>
          <Input name="email" type="email" placeholder="exemplo@exemplo.com" />
          <Label>Senha:</Label>
          <Input name="password" type="password" placeholder="Sua senha" />
        </FieldsContainer>

        <ButtonContainer>
          <Button type="submit">
            <Icon px={20} /> <p>Entrar</p>
          </Button>
        </ButtonContainer>

        <UtilsContainer>
          {/* <LabelForgotPassword></LabelForgotPassword> */}
          <LabelSignup onClick={handleClick}>Quero me cadastrar!</LabelSignup>
        </UtilsContainer>
      </Form>

      <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
}
