import React from 'react';

import { Container, Label } from './styles';

export default function OpenDrawerButton({ handleClose, Icon, text }) {
    return (
        <>
            <Container onClick={handleClose}>
                <Icon
                    style={{ color: 'white', fontSize: 25, marginRight: 8 }}
                />
                <Label>{text}</Label>
            </Container>
        </>
    );
}
