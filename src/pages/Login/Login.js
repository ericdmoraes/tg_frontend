import React from 'react';

// Styles
import { Container, BackgroundImage } from './LoginStyles';

// Components
import LoginFormContainer from './LoginForm/LoginForm';

export default function Login() {
    return (
        <div>
            <Container>
                <LoginFormContainer />
            </Container>
            <BackgroundImage src="https://picsum.photos/1920/1080" />
        </div>
    );
}
