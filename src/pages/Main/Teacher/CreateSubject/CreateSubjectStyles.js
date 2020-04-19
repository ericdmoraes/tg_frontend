import styled from 'styled-components';

export const Container = styled.div`
    width: 30%;
    height: 30px;
    /* background-color: black; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    background: rgb(0, 0, 0);
    background: -moz-linear-gradient(
        120deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(71, 50, 96, 1) 50%,
        rgba(40, 22, 79, 1) 100%
    );
    background: -webkit-linear-gradient(
        120deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(71, 50, 96, 1) 50%,
        rgba(40, 22, 79, 1) 100%
    );
    background: linear-gradient(
        120deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(71, 50, 96, 1) 50%,
        rgba(40, 22, 79, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#28164f",GradientType=1);
    -webkit-box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.37);
    -moz-box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.37);
    box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.37);

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
