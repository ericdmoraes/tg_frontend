import React from 'react';

import { Divider, Ribbon, TitleContainer } from './styles';

export default function PageTitle({ title, Icon }) {
    return (
        <>
            <TitleContainer>
                <Ribbon>
                    <Icon style={{ fontSize: 25, color: 'white' }} />
                </Ribbon>
                <h1>{title}</h1>
            </TitleContainer>
            <Divider />
        </>
    );
}
