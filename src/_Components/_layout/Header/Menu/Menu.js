import React from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Actions
import { signOut } from '../../../../store/modules/auth/actions';

// Styles
import { Container } from './MenuStyles';

export default function Menu() {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(signOut());
    };

    return (
        <Container>
            <p
                onClick={handleClick}
                style={{ color: 'white', cursor: 'pointer' }}
            >
                SAIR
            </p>
        </Container>
    );
}
