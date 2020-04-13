import React from 'react';

import { Container, TitleLabel, DescriptionLabel } from './ItemStyles';

import navigateTo from '../../../../../utils/Services/NavigationServices/navigate';

export default function Item({ data }) {
    const handleClick = ({ id }) => {
        navigateTo(`/tests/${id}`, data);
    };

    return (
        <Container onClick={() => handleClick(data)}>
            <TitleLabel>{data.name}</TitleLabel>
            <DescriptionLabel>{data.description}</DescriptionLabel>
        </Container>
    );
}
