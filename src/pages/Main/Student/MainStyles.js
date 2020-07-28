import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0px 20px;
  /* background-color: aliceblue; */
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
