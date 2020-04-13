import React from 'react';

import { useSelector } from 'react-redux';

import navigateTo from '../../utils/Services/NavigationServices/navigate';

// Components
import Menu from './Menu/Menu';

// Styles
import {
    Container,
    Title,
    UserMenu,
    ImgPlaceholder,
    LabelTitle,
    Label,
    OptionsContainer,
} from './HeaderStyles';

export default function Default() {
    const { name, teacher } = useSelector((state) => state.user.profile);

    const userType = teacher ? 'Professor' : 'Aluno';

    const handleClick = () => {
        navigateTo('/');
    };

    return (
        <Container>
            <Title onClick={handleClick}>
                <LabelTitle>{userType}</LabelTitle>
            </Title>

            <UserMenu>
                {name && (
                    <div
                        style={{
                            marginRight: 5,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <ImgPlaceholder src="https://picsum.photos/45/45?random=1" />
                        <OptionsContainer>
                            <Label>
                                Olá, <b>{name}</b>!
                            </Label>
                            <Menu />
                        </OptionsContainer>
                    </div>
                )}
            </UserMenu>
        </Container>
    );
}
