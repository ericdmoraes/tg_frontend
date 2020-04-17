import React, { useRef, useEffect } from '@/_Components/UnformSelect/react';
import ReactSelect, {@/_Components/UnformSelect/@unform/core
  OptionTypeBase,
  Props as SelectPro@/_Components/UnformSelect/styled-components
} from 'react-select';
import { useField } from '@unform/core';


const Select = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value',
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }

          return ref.state.value.map((option: OptionTypeBase) => option.value);
        } else {
          if (!ref.state.value) {
            return '';
          }

          return ref.state.value.value;
        }
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <ReactSelect
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      {...rest}
    />
  );
};

export default Select;