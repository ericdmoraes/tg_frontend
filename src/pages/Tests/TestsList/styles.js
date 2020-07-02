import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;

    flex-direction: row-reverse;

    @media (max-width: 767px) {
        justify-content: center;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-width: 100%;

    @media (max-width: 767px) {
        justify-content: center;
    }
`;

export const NoDataContainer = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
