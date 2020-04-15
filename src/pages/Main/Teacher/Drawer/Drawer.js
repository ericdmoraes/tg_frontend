import React from 'react';

// Compoents
import DrawerMenu from '@material-ui/core/Drawer';
import { Form } from '@unform/web';

// Services
import { createSubject } from '../../../../utils/Services/SubjectsServices/SubjectsService';

import Input from '../../../../_Components/UnformInput/UnformInput';

// Styles
import { Container, Label, Button } from './DrawerStyles';

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
                    <Button type="submit">Criar disciplina</Button>
                </Container>
            </Form>
        </DrawerMenu>
    );
}