import React from 'react';

import { Container, Label } from './CreateSubjectStyles';

import { MdPlaylistAdd } from 'react-icons/md';

export default function CreateSubject({ handleClose }) {
    return (
        <>
            <Container onClick={handleClose}>
                <MdPlaylistAdd
                    style={{ color: 'white', fontSize: 28, marginRight: 5 }}
                />
                <Label>Criar Disciplina</Label>
            </Container>
        </>
    );
}
