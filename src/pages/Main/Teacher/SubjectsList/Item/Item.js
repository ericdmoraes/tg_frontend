import React from 'react';

import { Container, TitleLabel, DescriptionLabel } from './ItemStyles';

export default function Item({ data }) {
    return (
        <Container>
            <TitleLabel>{data.name}</TitleLabel>
            <DescriptionLabel>{data.description}</DescriptionLabel>
        </Container>
    );
}
