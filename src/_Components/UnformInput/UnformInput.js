import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import styled from 'styled-components';

export const InputCustom = styled.input`
    border-radius: 5px;
    height: 35px;
    padding: 10px;
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid #bbbbbb;
`;

export default function Input({ name, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, defaultValue = '', registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <InputCustom
            name={name}
            ref={inputRef}
            defaultValue={defaultValue}
            {...rest}
        />
    );
}
