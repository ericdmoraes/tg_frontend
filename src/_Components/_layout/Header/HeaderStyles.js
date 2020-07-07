import styled from 'styled-components';
import { AppColor, GradientDefault } from '~/styles/global';

import { IoIosArrowDown } from 'react-icons/io';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;

  ${GradientDefault}

  -webkit-box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.37);
  box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.37);

  @media (max-width: 767px) {
    padding: 3px;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  height: 80%;
  display: flex;
  justify-content: start-end;
  align-items: center;
  cursor: pointer;
`;

export const LabelTitle = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bolder;

  @media (max-width: 767px) {
    font-size: 22px;
  }
`;

export const UserMenu = styled.div`
  height: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ImgPlaceholder = styled.img`
  width: 45px;
  height: 45px;
  background-color: white;
  margin: 0 5px;
  border-radius: 100px;
  border: 1px solid #fbfbfb;
`;

export const Icon = styled(IoIosArrowDown)`
  color: white;
  font-size: 25px;
`;

export const Label = styled.p`
  color: white;
  padding: 5px;
  text-align: center;
  align-self: center;
  /* background-color: red; */
`;

export const NameContainer = styled.div`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
