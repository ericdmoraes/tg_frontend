import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    /* background-color: silver; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const Label = styled.p`
    color: white;
`;

export const CreateTestButton = styled.div`
    background-color: black;
    height: 30px;
    width: 30%;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.5);
    }
`;
