import styled from 'styled-components';

import UnformInput from '../../../_Components/UnformInput/UnformInput';

import {
  Positive,
  PositiveDarker,
  Negative,
  NegativeDarker,
} from '~/styles/global';

export const Container = styled.div`
  padding: 20px;
`;

export const AddQuestionContainer = styled.div`
  background-color: ${Positive};
  border: 1px solid ${PositiveDarker};

  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 30px;

  margin-bottom: 5px;

  border-radius: 5px;

  p {
    color: white;
    font-weight: bold;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 30px;
  }
`;

export const QuestionContainer = styled.div`
  border: 1px solid silver;
  margin: 10px 0px;
  padding: 10px;
`;

export const FooterQuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RemoveQuestionContainer = styled.div`
  background-color: ${Negative};
  border: 1px solid ${NegativeDarker};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  width: 40%;
  height: 30px;

  p {
    color: white;
    font-weight: bold;
    text-align: center;
  }

  @media (max-width: 767px) {
    width: 33%;
    height: 50px;
  }
`;

export const Select = styled.select`
  width: 33%;

  option {
    width: 33%;
  }
`;

export const CloseButtonContainer = styled.div`
  height: 40px;
  width: 40px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
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
