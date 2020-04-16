import React, { useEffect, useState } from 'react';

// Component
import Item from './Item/Item';
import Drawer from './Drawer/Drawer';

// Styles
import { HeaderContainer, CreateTestButton, Label } from './TestsStyles';

// Services
import { getTests } from '../../utils/Services/TestsServices/TestsService';

export default function Tests({
    history: {
        location: {
            state: { params },
        },
    },
    location: { pathname },
}) {
    const [tests, setTests] = useState(null);
    const [subjectName, setSubjectName] = useState(null);
    const [open, setOpen] = useState(false);
    const [subjectId, setsubjectId] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            setSubjectName(params.name);

            const allUrl = pathname.split('/');
            setsubjectId(allUrl[allUrl.length - 1]);
            const [res, resErr] = await getTests(allUrl[allUrl.length - 1]);
            if (!resErr) {
                setTests(res);
            }
        };

        fetch();
    }, [open]);

    const handleClose = () => {
        setOpen(!open);
    };

    return (
        <>
            <HeaderContainer>
                <h1>{`${subjectName} - Testes`}</h1>
                <CreateTestButton onClick={handleClose}>
                    <Label>Criar Teste</Label>
                </CreateTestButton>
            </HeaderContainer>
            {!tests ? (
                <p>Carregando...</p>
            ) : (
                tests.map((test) => <Item key={test.id} data={test} />)
            )}
            <Drawer
                anchor="bottom"
                open={open}
                handleClose={handleClose}
                subjectId={subjectId}
            />
        </>
    );
}
