import styled from 'styled-components';
import { AppColor } from '~/styles/global';

export const Container = styled.div`
    background-color: #fff;
    border: 0.5px solid rgba(71, 50, 96, 0.3);
    margin: 20px 0px;
    max-width: 30%;
    flex: 1 0 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    @media (max-width: 767px) {
        max-width: 97%;
        flex: 1 0 98%;
    }

    border-radius: 5px;

    -webkit-box-shadow: 5px 5px 5px 0px rgba(71, 50, 96, 0.3);
    -moz-box-shadow: 5px 5px 5px 0px rgba(71, 50, 96, 0.3);
    box-shadow: 5px 5px 5px 0px rgba(71, 50, 96, 0.3);
`;

export const Content = styled.div`
    padding: 30px 10px;
`;

export const CTA = styled.div`
    width: 100%;
    height: 100;
    border-top: 0.5px solid black;
    background-color: ${AppColor};
    margin-top: 10;
`;

export const TitleLabel = styled.h2`
    color: ${({ color }) => (color ? color : 'black')};
    border-right: 1px solid white;
`;

export const CTALabel = styled.h3`
    color: ${({ color }) => (color ? color : 'black')};
`;

export const DescriptionLabel = styled.p`
    color: black;
    font-weight: 100;
`;

export const DescriptionContainer = styled.div`
    margin-top: 20px;
`;

export const GoToTest = styled.div`
    width: 100%;
    height: 60px;
    border-top: 0.5px solid black;
    background-color: ${AppColor};
    margin-top: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        > h3 {
            text-decoration: underline;
        }
    }
`;
