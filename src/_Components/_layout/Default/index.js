import React from 'react';

import Header from '../../Header/Header';

// Styles
import { Wrapper } from './styles';

export default function Default({ children }) {
    return (
        <>
            <Header />
            <Wrapper>{children}</Wrapper>
        </>
    );
}
