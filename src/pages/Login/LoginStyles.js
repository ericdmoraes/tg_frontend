import styled from 'styled-components';

export const Container = styled.div`
    /* backdrop-filter: blur(10px) grayscale(1); */
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BackgroundImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
`;
