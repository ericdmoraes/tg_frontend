import React from 'react';

import { TestContainer } from './ItemStyles';

import navigateTo from '../../../utils/Services/NavigationServices/navigate';

export default function Item({ data }) {
    const handleClick = () => {
        navigateTo(`/question/${data.id}`, data);
    };

    return (
        <TestContainer onClick={handleClick}>
            {data.name}
            <br />
            <b>id: </b>
            {data.id}
        </TestContainer>
    );
}
