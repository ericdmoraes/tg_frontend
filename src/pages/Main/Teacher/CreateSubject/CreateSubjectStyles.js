import styled from 'styled-components';

export const Container = styled.div`
    width: 30%;
    height: 30px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }

    @media (max-width: 767px) {
        width: 100%;
        margin: 10px 0px;
    }
`;

export const Label = styled.p`
    color: white;
`;
