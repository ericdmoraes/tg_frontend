import React from 'react';

// Compoents
import DrawerMenu from '@material-ui/core/Drawer';
import { Form } from '@unform/web';

import { IoMdClose, IoMdAdd } from 'react-icons/io';

// Services
import { createSubject } from '~/utils/Services/SubjectsServices/SubjectsService';

import Input from '~/_Components/UnformInput/UnformInput';

// Styles
import { Container, Label, Button, CloseButtonContainer } from './DrawerStyles';

export default function Drawer({ handleClose, open, anchor }) {
    const handleSubmit = async ({ name, description }) => {
        const [res, resErr] = await createSubject(name, description);
        if (!resErr) {
            alert('Disciplina criada com sucesso!');
            handleClose();
        }
    };

    return (
        <DrawerMenu anchor="bottom" open={open} onClose={handleClose}>
            <CloseButtonContainer onClick={handleClose}>
                <IoMdClose style={{ fontSize: 25, cursor: 'pointer' }} />
            </CloseButtonContainer>
            <Form onSubmit={handleSubmit}>
                <Container>
                    <h1>Criar disciplina</h1>
                    <Label>Nome:</Label>
                    <Input
                        name="name"
                        type="text"
                        placeholder="Nome da disciplina lessionada"
                    />
                    <Label>Description:</Label>
                    <Input
                        name="description"
                        type="text"
                        placeholder="Uma descrição simples da disciplina"
                    />
                    <Button type="submit">
                        <IoMdAdd style={{ fontSize: 25, color: 'white' }} />
                        <p>Criar disciplina</p>
                    </Button>
                </Container>
            </Form>
        </DrawerMenu>
    );
}
