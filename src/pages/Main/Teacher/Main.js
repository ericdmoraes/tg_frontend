import React, { useState } from 'react';

import { ListHeader } from './MainStyles';

import Drawer from './Drawer/Drawer';

import { FaClipboard } from 'react-icons/fa';
import { MdPlaylistAdd } from 'react-icons/md';

import ButtonOpenDrawer from '~/_Components/OpenDrawerButton/OpenDrawerButton';

// Components
import SubjectsList from './SubjectsList/SubjectsList';
import Title from '~/_Components/PageTitle/PageTitle';

export default function Teacher() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListHeader>
                <Title title="Disciplinas" Icon={FaClipboard} />
                <ButtonOpenDrawer
                    Icon={MdPlaylistAdd}
                    text="Criar Disciplina"
                    handleClose={handleClose}
                />
            </ListHeader>
            <SubjectsList status={open} />
            <Drawer anchor="bottom" open={open} handleClose={handleClose} />
        </>
    );
}
