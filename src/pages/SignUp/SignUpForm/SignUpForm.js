import React, { useState } from 'react';

// Thir Components
import Snackbar from '@material-ui/core/Snackbar';
import { Form } from '@unform/web';

// Components
import Alert from '../../../_Components/Alert/Alert';

// Styles
import * as S from './SignUpFormStyles';

// Services
import navigateTo from '../../../utils/Services/NavigationServices/navigate';
import { makeRegister } from '../../../utils/Services/SignUpServices/SignUpServices';

export default function SignUpForm() {
  const [check, setCheck] = useState(false);
  const [snack, setSnack] = useState(false);
  const [created, setCreated] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const handleClick = () => {
    return navigateTo('/login');
  };

  const handleChange = () => {
    setCheck(!check);
  };

  const handleSubmit = async ({ name, email, password }) => {
    const data = {
      name,
      email,
      password,
      teacher: check,
    };

    const [, err] = await makeRegister(data);

    if (!err) {
      return setCreated(true);
    }
    setErrorMsg(err.data);
    setSnack(true);
  };

  const handleSnack = () => {
    setSnack(false);
  };

  return (
    <S.Container>
      <Form onSubmit={handleSubmit}>
        {!created ? (
          <>
            <S.HeaderContainer>
              <S.Title>Cadastrar</S.Title>
            </S.HeaderContainer>
            <S.FieldsContainer>
              <S.Label>Nome:</S.Label>
              <S.Input name="name" type="text" placeholder="Seu nome" />
              <S.Label>E-mail:</S.Label>
              <S.Input
                name="email"
                type="email"
                placeholder="exemplo@exemplo.com"
              />
              <S.TeacherCheck>
                <input
                  style={{ marginRight: 5 }}
                  type="checkbox"
                  onChange={handleChange}
                />
                <S.Label>Professor?</S.Label>
              </S.TeacherCheck>
            </S.FieldsContainer>
            <S.ButtonContainer>
              <S.Button type="submit">
                <S.Icon px={16} /> Criar conta
              </S.Button>
            </S.ButtonContainer>
          </>
        ) : (
          <S.Label>
            Por favor, verifique sua caixa de emails, sua senha foi enviada pra
            lá! :)
          </S.Label>
        )}
        <S.UtilsContainer>
          <S.LabelForgotPassword onClick={() => handleClick()}>
            Fazer login
          </S.LabelForgotPassword>
        </S.UtilsContainer>
      </Form>
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
      />
      <Snackbar open={snack} autoHideDuration={6000} onClose={handleSnack}>
        <Alert onClose={handleSnack} severity="error">
          {errorMsg}
        </Alert>
      </Snackbar>
    </S.Container>
  );
}
