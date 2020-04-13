import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #fff;
    border: 0.3px solid black;
    margin: 10px 0;
    padding: 15px 5px;
    border-radius: 5px;

    cursor: pointer;

    &:hover {
        background-color: #eee;
    }
`;

export const TitleLabel = styled.h2`
    color: black;
`;

export const DescriptionLabel = styled.p`
    color: black;
`;
