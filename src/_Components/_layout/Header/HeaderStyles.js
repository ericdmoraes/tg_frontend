import styled from 'styled-components';

import { IoIosArrowDown } from 'react-icons/io';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 35px;

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

    @media (max-width: 767px) {
        padding: 3px;
    }
`;

export const OptionsContainer = styled.div`
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
    height: 80%;
    display: flex;
    justify-content: start-end;
    align-items: center;
    cursor: pointer;
`;

export const LabelTitle = styled.div`
    color: white;
    font-size: 30px;
    font-weight: bolder;

    @media (max-width: 767px) {
        font-size: 22px;
    }
`;

export const UserMenu = styled.div`
    height: 80%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const ImgPlaceholder = styled.img`
    width: 45px;
    height: 45px;
    background-color: white;
    margin: 0 5px;
    border-radius: 100px;
    border: 1px solid #fbfbfb;
`;

export const Icon = styled(IoIosArrowDown)`
    color: white;
    font-size: 25px;
`;

export const Label = styled.p`
    color: white;
    text-align: center;
    align-self: center;
`;
