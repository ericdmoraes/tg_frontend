import styled from 'styled-components';
import { GradientDefault } from '~/styles/global';

export const ListHeader = styled.div`
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    height: 100%;
    padding: 0 20px;

    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const SectionTitle = styled.h1`
    align-self: center;
`;

export const Ribbon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    ${GradientDefault};
    justify-content: center;
    align-items: center;
    display: flex;
    margin-right: 10px;
`;
