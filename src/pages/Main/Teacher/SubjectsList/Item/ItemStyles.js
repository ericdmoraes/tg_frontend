import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #fff;
    border: 0.5px solid black;
    margin: 10px 0;
    padding: 15px 5px;
    border-radius: 5px;

    -webkit-box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);
    box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);

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
