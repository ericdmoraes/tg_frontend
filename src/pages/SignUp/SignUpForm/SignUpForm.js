import React, { useState } from 'react';

// Thir Components
import Snackbar from '@material-ui/core/Snackbar';
import { Form } from '@unform/web';

// Components
import Alert from '../../../_Components/Alert/Alert';

// Styles
import {
    Container,
    HeaderContainer,
    Title,
    FieldsContainer,
    Input,
    Label,
    Button,
    ButtonContainer,
    Icon,
    LabelForgotPassword,
    UtilsContainer,
} from './SignUpFormStyles';

// Services
import navigateTo from '../../../utils/Services/NavigationServices/navigate';
import { makeRegister } from '../../../utils/Services/SignUpServices/SignUpServices';

export default function SignUpForm() {
    const [check, setCheck] = useState(false);
    const [snack, setSnack] = useState(false);

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
        const [res, errRes] = await makeRegister(data);

        if (!errRes) {
            alert(res);
            return handleClick();
        }
        setSnack(true);
    };

    const handleSnack = () => {
        setSnack(false);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <HeaderContainer>
                    <Title>Cadastrar</Title>
                </HeaderContainer>
                <FieldsContainer>
                    <Label>Nome:</Label>
                    <Input name="name" type="text" placeholder="Seu nome" />
                    <Label>E-mail:</Label>
                    <Input
                        name="email"
                        type="email"
                        placeholder="exemplo@exemplo.com"
                    />
                    <Label>Senha:</Label>
                    <Input
                        name="password"
                        type="password"
                        placeholder="Sua senha"
                    />
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <input
                            style={{ marginRight: 5 }}
                            type="checkbox"
                            onChange={handleChange}
                        />
                        <Label>Professor?</Label>
                    </div>
                </FieldsContainer>
                <ButtonContainer>
                    <Button type="submit">
                        <Icon px={16} /> Criar conta
                    </Button>
                </ButtonContainer>
                <UtilsContainer>
                    <LabelForgotPassword onClick={() => handleClick()}>
                        Fazer login
                    </LabelForgotPassword>
                </UtilsContainer>
            </Form>
            <Snackbar
                open={snack}
                autoHideDuration={6000}
                onClose={handleSnack}
            >
                <Alert onClose={handleSnack} severity="error">
                    Signup failed!
                </Alert>
            </Snackbar>
        </Container>
    );
}
