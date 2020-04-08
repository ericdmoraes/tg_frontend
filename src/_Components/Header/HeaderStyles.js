import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;

    -webkit-box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.37);
    -moz-box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.37);
    box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.37);
`;

export const Title = styled.div`
    width: 40%;
    height: 80%;
    margin: 0 35px;
    display: flex;
    justify-content: start-end;
    align-items: center;
`;

export const LabelTitle = styled.div`
    color: white;
    font-size: 30px;
    font-weight: bolder;
`;

export const UserMenu = styled.div`
    width: 40%;
    height: 80%;
    margin: 0 35px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const ImgPlaceholder = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: white;
    margin: 0 5px;
`;
