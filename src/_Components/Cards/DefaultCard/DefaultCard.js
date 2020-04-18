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

import navigateTo from '~/utils/Services/NavigationServices/navigate';

export default function DefaultCard({ data }) {
    const handleClick = (id) => {
        navigateTo(`/tests/${id}`, data);
    };

    return (
        <Container>
            <Content>
                <small>
                    <b>Título:</b>
                </small>
                <TitleLabel>{data.name}</TitleLabel>
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
                    <b>{`Criado em: ${new Date(
                        data.createdAt
                    ).getDate()}/${new Date(
                        data.createdAt
                    ).getMonth()}/${new Date(
                        data.createdAt
                    ).getFullYear()}`}</b>
                </small>
            </GoToTest>
        </Container>
    );
}
