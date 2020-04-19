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

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        flex-direction: row;
    }
`;

export const Divider = styled.div`
    height: 37px;
    border-left: 0.5px solid black;
    margin: 0 30px;

    @media (max-width: 767px) {
        height: 0px;
        width: 80%;
        border-left: 0px solid black;
        border-bottom: 0.5px solid black;
        margin: 10px 0px;
    }
`;
