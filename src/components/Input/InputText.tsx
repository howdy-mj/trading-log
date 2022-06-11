import React, { ComponentPropsWithoutRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Input = styled.input<{ validate: boolean }>`
  border-bottom: 1px solid gainsboro;

  &:focus {
    border-color: ${(props) => props.theme.color.active};
    border-width: 2px;
  }

  &:read-only {
    :focus {
      border-color: gainsboro;
      border-width: 1px;
    }
  }

  /* ${(props) =>
    !!props.validate &&
    css`
      border-color: ${props.theme.color.danger};
    `} */

  ${(props) =>
    props.theme.mq.tablet &&
    css`
      width: 100%;
    `}
`;

type InputProps = {
  value?: string;
  onChange?: (e: any) => void;
  readOnly?: boolean;
  required?: boolean;
  validate?: boolean;
} & Omit<ComponentPropsWithoutRef<'input'>, 'value' | 'onChange' | 'readOnly'>;

const InputText = ({
  value,
  onChange,
  readOnly = false,
  required = false,
  validate,
  ...restProps
}: InputProps) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      required={required}
      validate={!!validate}
      {...restProps}
    />
  );
};

export default InputText;
