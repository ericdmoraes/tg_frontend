import React from 'react';

import {
    Container,
    TitleLabel,
    DescriptionLabel,
    Content,
    DescriptionContainer,
    GoToTest,
    CTALabel,
} from './styles';

import { FaCogs } from 'react-icons/fa';

import navigateTo from '~/utils/Services/NavigationServices/navigate';

export default function DefaultCard({ data }) {
    const handleClick = (id) => {
        navigateTo(`/tests/${id}`, data);
    };

    const day = new Date(data.createdAt).getDate();
    const month = new Date(data.createdAt).getMonth();
    const year = new Date(data.createdAt).getFullYear();

    return (
        <Container>
            <div style={{ position: 'absolute', top: 10, right: 10 }}>
                <FaCogs style={{ fontSize: 20 }} />
            </div>
            <Content>
                <small>
                    <b>ID de inscrição: </b>
                    {data.id}
                </small>
                <DescriptionContainer>
                    <small>
                        <b>Título:</b>
                    </small>
                    <TitleLabel>{data.name}</TitleLabel>
                </DescriptionContainer>
                <DescriptionContainer>
                    <small>
                        <b>Descrição:</b>
                    </small>
                    <DescriptionLabel>{data.description}</DescriptionLabel>
                </DescriptionContainer>
            </Content>
            <GoToTest onClick={() => handleClick(data.id)}>
                <CTALabel color="white">Ver Testes</CTALabel>
                <small style={{ color: 'white', marginLeft: 10 }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            borderLeft: '1px solid white',
                            paddingLeft: 10,
                        }}
                    >
                        <b>{`Criado em: `}</b>
                        {`${day}/${month}/${year}`}
                    </div>
                </small>
            </GoToTest>
        </Container>
    );
}
