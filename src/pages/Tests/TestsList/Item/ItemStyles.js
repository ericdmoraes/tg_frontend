import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;

    background-color: silver;

    @media (max-width: 767px) {
        justify-content: center;
    }
`;
