import styled from 'styled-components';
import { GradientDefault } from '~/styles/global';

export const Container = styled.div`
    width: 30%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    ${GradientDefault}

    -webkit-box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.37);
    -moz-box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.37);
    box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.37);

    &:hover {
        background-color: rgba(0, 0, 0, 0.3);
        cursor: pointer;

        > p {
            text-decoration: underline;
        }
    }

    @media (max-width: 767px) {
        width: 100%;
        margin: 10px 0px;
    }
`;

export const Label = styled.p`
    color: white;
`;
