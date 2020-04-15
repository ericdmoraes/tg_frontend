import styled from 'styled-components';

import UnformInput from '../../../../_Components/UnformInput/UnformInput';

export const Container = styled.div`
    padding: 20px;
`;

export const Label = styled.p`
    font-weight: 500;
    color: black;
    margin-bottom: 3px;
`;

export const Input = styled(UnformInput)`
    border-radius: 5px;
    height: 30px;
    padding: 10px;
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid white;
`;

export const Button = styled.button`
    width: 30%;
    height: 37px;
    border-radius: 5px;
    border: 0px solid black;
    background-color: black;
    color: white;
    align-items: center;
    justify-content: center;
    display: flex;

    @media (max-width: 767px) {
        width: 100%;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.6);
    }
`;
