import styled from 'styled-components';

import { IoIosArrowDown } from 'react-icons/io';

export const Container = styled.div`
    border-left: solid 0.3px silver;
    margin-left: 10px;

    padding: 9px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        border-top: solid 0.3px silver;
        border-left: solid 0px silver;
        margin-left: 0px;
    }
`;

export const Icon = styled(IoIosArrowDown)`
    color: white;
    font-size: 25px;
`;
