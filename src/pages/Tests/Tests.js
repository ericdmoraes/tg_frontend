import React, { useEffect, useState } from 'react';

// Component
import Drawer from './Drawer/Drawer';
import TestList from './TestsList/TestsList';

// Styles
import { HeaderContainer, CreateTestButton, Label } from './TestsStyles';

export default function Tests({
    history: {
        location: {
            state: { params },
        },
    },
    location: { pathname },
}) {
    const [subjectName, setSubjectName] = useState(null);
    const [open, setOpen] = useState(false);
    const [subjectId, setsubjectId] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            setSubjectName(params.name);
            const allUrl = pathname.split('/');
            setsubjectId(allUrl[allUrl.length - 1]);
        };
        fetch();
    }, [open]);

    const handleClose = () => {
        setOpen(!open);
    };

    return (
        <>
            <HeaderContainer>
                <h1>{subjectName}</h1>
                <CreateTestButton onClick={handleClose}>
                    <Label>Criar Teste</Label>
                </CreateTestButton>
            </HeaderContainer>

            <TestList pathname={pathname} />
            <Drawer
                anchor="bottom"
                open={open}
                handleClose={handleClose}
                subjectId={subjectId}
            />
        </>
    );
}
