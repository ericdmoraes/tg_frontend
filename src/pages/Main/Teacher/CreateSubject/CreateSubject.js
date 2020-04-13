import React, { useState, useEffect } from 'react';

import { Container, Label } from './CreateSubjectStyles';

import Drawer from './Drawer/Drawer';

export default function CreateSubject() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(!open);
    };

    return (
        <>
            <Container onClick={handleClose}>
                <Label>Criar Disciplina</Label>
            </Container>
            <Drawer anchor="bottom" open={open} handleClose={handleClose} />
        </>
    );
}
