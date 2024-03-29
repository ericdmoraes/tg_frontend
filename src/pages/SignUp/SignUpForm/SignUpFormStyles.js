import styled from 'styled-components';

import { MdAssignment } from 'react-icons/md';
import UnformInput from '../../../_Components/UnformInput/UnformInput';
import { Button as ButtonColor, ButtonHover } from '~/styles/global';

// export const Container = styled.div`
//   min-width: 35%;
//   background-color: rgba(30, 30, 30, 0.8);
//   border-radius: 5px;
//   padding: 20px;

//   @media (max-width: 767px) {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// `;

export const Container = styled.div`
  min-width: 40%;
  height: 100%;
  background-color: rgb(10, 10, 10);
  border-radius: 5px;
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
    background-color: rgba(10, 10, 10, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(MdAssignment)`
  font-size: ${({ px }) => px}px;
  color: black;
  margin-right: 10px;
`;

export const Title = styled.h1`
  color: white;
`;

export const FieldsContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  margin-top: 10px;
`;

export const Label = styled.p`
  font-weight: 500;
  color: white;
  margin-bottom: 3px;
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  padding: 0px 40px;
`;

export const Input = styled(UnformInput)`
  border-radius: 5px;
  height: 30px;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid white;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 60%;
  height: 100%;
  border-radius: 5px;
  border: 0px solid black;
  background-color: ${ButtonColor};
  color: black;
  align-items: center;
  justify-content: center;
  display: flex;

  p {
    font-weight: bold;
  }

  &:hover {
    background-color: ${ButtonHover};
  }
`;

export const UtilsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row-reverse;
  width: 100%;
  margin-top: 30px;
`;

export const LabelForgotPassword = styled.p`
  font-weight: 500;
  width: 40%;
  color: white;
  text-decoration: underline;
  text-align: right;
  font-size: 14px;
  cursor: pointer;
`;

export const TeacherCheck = styled.div`
  display: flex;
  align-items: center;
`;
