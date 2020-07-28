import React from 'react';

// Icons
import { FaHome } from 'react-icons/fa';

import * as S from './MainStyles';

// Components
import SubscribedContainer from './SubscribedContainer/Subscribed';
import SearchSubject from './SearchSubjectsContainer/SearchContainer';
import PageTitle from '~/_Components/PageTitle/PageTitle';

export default function Student() {
  return (
    <>
      <S.ListHeader>
        <PageTitle title="Bem vindo!" Icon={FaHome} />
      </S.ListHeader>
      <S.Container>
        <SearchSubject />
        <SubscribedContainer />
      </S.Container>
    </>
  );
}
