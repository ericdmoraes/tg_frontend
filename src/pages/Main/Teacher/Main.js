import React, { useState } from 'react';

// Styles
import { ListHeader } from './MainStyles';

// Icons
import { FaClipboard } from 'react-icons/fa';
import { MdPlaylistAdd } from 'react-icons/md';

// Components
import ButtonOpenDrawer from '~/_Components/OpenDrawerButton/OpenDrawerButton';
import SubjectsList from './SubjectsList/SubjectsList';
import Title from '~/_Components/PageTitle/PageTitle';
import Drawer from './Drawer/Drawer';

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
