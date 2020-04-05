import React, { useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Form
import { Form } from '@unform/web';

// Store
import { signInRequest } from '../../../store/modules/auth/actions';

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

export default function LoginForm() {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const handleSubmit = async ({ email, password }) => {
        setLoading(true);
        dispatch(signInRequest(email, password));
        setLoading(false);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <HeaderContainer>
                    <Title>Entrar</Title>
                </HeaderContainer>
                <FieldsContainer>
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
                </FieldsContainer>
                <ButtonContainer>
                    <Button type="submit">
                        {loading ? (
                            'Carregando'
                        ) : (
                            <>
                                <Icon px={16} /> Entrar
                            </>
                        )}
                    </Button>
                </ButtonContainer>
                <UtilsContainer>
                    <LabelForgotPassword>
                        Esqueci minha senha*
                    </LabelForgotPassword>
                    <LabelSignup>Quero me cadastrar</LabelSignup>
                </UtilsContainer>
            </Form>
        </Container>
    );
}
