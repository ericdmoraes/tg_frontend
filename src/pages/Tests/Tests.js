import React, { useEffect, useState } from 'react';

import { FaClipboardList } from 'react-icons/fa';
import { MdNoteAdd } from 'react-icons/md';

// Component
import Title from '~/_Components/PageTitle/PageTitle';
import TestList from './TestsList/TestsList';
import Drawer from './Drawer/Drawer';
import OpenDrawer from '~/_Components/OpenDrawerButton/OpenDrawerButton';

// Styles
import { HeaderContainer } from './TestsStyles';

export default function Tests({
  history: {
    location: {
      state: {
        params: { name },
      },
    },
  },
  location: { pathname },
}) {
  const [subjectName, setSubjectName] = useState(null);
  const [open, setOpen] = useState(false);
  const [subjectId, setsubjectId] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setSubjectName(name);
      const allUrl = pathname.split('/');
      setsubjectId(allUrl[allUrl.length - 1]);
    };
    fetch();
  }, [open, name, pathname]);

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <HeaderContainer>
        <Title title={subjectName} Icon={FaClipboardList} />
        <OpenDrawer
          handleClose={handleClose}
          text="Criar Teste"
          Icon={MdNoteAdd}
        />
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
