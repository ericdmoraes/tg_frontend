import styled from 'styled-components';
import { GradientDefault } from '~/styles/global';

// third libs
import { Form } from '@unform/web';

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled(Form)`
  display: flex;
  flex-direction: column;

  > p {
    font-weight: bold;
  }

  > input {
    border-radius: 5px;
    height: 35px;
    padding: 10px;
    width: 35%;
    margin-bottom: 20px;
    border: 1px solid #bbbbbb;

    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
  width: 30%;
  height: 37px;
  border-radius: 5px;
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;

  border: 0 solid black;
  ${GradientDefault};

  @media (max-width: 767px) {
    width: 100%;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
