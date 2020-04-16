import React from 'react';

// Compoents
import DrawerMenu from '@material-ui/core/Drawer';
import { Form } from '@unform/web';

// Services
import { createTest } from '../../../utils/Services/TestsServices/TestsService';

import Input from '../../../_Components/UnformInput/UnformInput';

// Styles
import { Container, Label, Button } from './DrawerStyles';

export default function Drawer({ handleClose, open, subjectId: subject_id }) {
    const handleSubmit = async ({ name, questions_quantity }) => {
        const [res, resErr] = await createTest(
            name,
            questions_quantity,
            subject_id
        );
        if (!resErr) {
            alert('Teste criado com sucesso!');
            handleClose();
        }
    };

    return (
        <DrawerMenu anchor="bottom" open={open} onClose={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Container>
                    <h1>Criar teste {subject_id}</h1>
                    <Label>Nome:</Label>
                    <Input
                        name="name"
                        type="text"
                        placeholder="Nome do teste"
                    />
                    <Label>
                        Quantidade de questões:
                        <br /> <small>Max.: 10</small>
                    </Label>
                    <Input
                        name="questions_quantity"
                        type="number"
                        placeholder="1"
                        min={1}
                        max={10}
                    />
                    <Button type="submit">Criar teste</Button>
                </Container>
            </Form>
        </DrawerMenu>
    );
}
