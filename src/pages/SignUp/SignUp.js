import React from 'react';

// Styles
import { BackgroundImage, Container } from './SignUpStyles';

// Components
import SignUpForm from './SignUpForm/SignUpForm';

export default function Login() {
    return (
        <>
            <Container>
                <SignUpForm />
            </Container>
            <BackgroundImage src="https://picsum.photos/1920/1080" />
        </>
    );
}
