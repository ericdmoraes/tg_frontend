import React, { useState } from 'react';

import { ListHeader, Ribbon, Divider, TitleContainer } from './MainStyles';

import Drawer from './Drawer/Drawer';

import { GoThreeBars } from 'react-icons/go';

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
                <TitleContainer>
                    <Ribbon>
                        <GoThreeBars style={{ fontSize: 25, color: 'white' }} />
                    </Ribbon>
                    <h1>Disciplinas</h1>
                </TitleContainer>
                <Divider />
                <CreateSubjectButton handleClose={handleClose} />
            </ListHeader>
            <SubjectsList status={open} />
            <Drawer anchor="bottom" open={open} handleClose={handleClose} />
        </>
    );
}
