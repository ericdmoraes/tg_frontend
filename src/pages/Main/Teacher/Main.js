import React, { useState } from 'react';

import { ListHeader } from './MainStyles';

import Drawer from './Drawer/Drawer';

// Components
import SubjectsList from './SubjectsList/SubjectsList';
import CreateSubjectButton from './CreateSubject/CreateSubject';

export default function Teacher() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListHeader>
                <h1>Disciplinas</h1>
                <div
                    style={{
                        height: '37px',
                        borderLeft: '0.5px solid black',
                        margin: '0 30px',
                    }}
                />
                <CreateSubjectButton handleClose={handleClose} />
            </ListHeader>
            <SubjectsList status={open} />
            <Drawer anchor="bottom" open={open} handleClose={handleClose} />
        </>
    );
}
