import React from 'react';

import { Container, Label } from './CreateSubjectStyles';

export default function CreateSubject({ handleClose }) {
    return (
        <>
            <Container onClick={handleClose}>
                <Label>Criar Disciplina</Label>
            </Container>
        </>
    );
}
