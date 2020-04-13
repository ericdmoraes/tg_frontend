import styled from 'styled-components';

export const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;

    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const SectionTitle = styled.h1`
    align-self: center;
`;
