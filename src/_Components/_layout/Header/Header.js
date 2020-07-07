import React from 'react';

import { useSelector } from 'react-redux';

import navigateTo from '~/utils/Services/NavigationServices/navigate';

// Components
import Menu from './Menu/Menu';

// Styles
import * as S from './HeaderStyles';

export default function Default() {
  const { name, teacher } = useSelector((state) => state.user.profile);

  const userType = teacher ? 'Professor' : 'Aluno';

  const handleClick = () => {
    navigateTo('/');
  };

  return (
    <S.Container>
      <S.Title onClick={handleClick}>
        <S.LabelTitle>{userType}</S.LabelTitle>
      </S.Title>

      <S.UserMenu>
        {name && (
          <S.NameContainer>
            <S.ImgPlaceholder src="https://picsum.photos/45/45?random=1" />

            <S.OptionsContainer>
              <S.Label>
                Olá, <b>{name}</b>!
              </S.Label>
              <Menu />
            </S.OptionsContainer>
          </S.NameContainer>
        )}
      </S.UserMenu>
    </S.Container>
  );
}
