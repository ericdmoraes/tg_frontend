import React from 'react';

import { useSelector } from 'react-redux';

import { IoIosArrowDown } from 'react-icons/io';

// Styles
import {
    Container,
    Title,
    UserMenu,
    ImgPlaceholder,
    LabelTitle,
} from './HeaderStyles';

export default function Default() {
    const { name, teacher } = useSelector((state) => state.user.profile);
    return (
        <Container>
            <Title>
                {teacher ? (
                    <LabelTitle>Professor</LabelTitle>
                ) : (
                    <LabelTitle>Aluno</LabelTitle>
                )}
            </Title>
            <UserMenu>
                {name && (
                    <>
                        <ImgPlaceholder />
                        <p style={{ color: 'white' }}>
                            Olá, <b>{name}</b>!
                        </p>
                        <IoIosArrowDown
                            style={{
                                marginLeft: 10,
                                color: 'white',
                                fontSize: 25,
                            }}
                        />
                    </>
                )}
            </UserMenu>
        </Container>
    );
}
