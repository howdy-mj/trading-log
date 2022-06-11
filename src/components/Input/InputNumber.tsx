import React, { ComponentPropsWithoutRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Input = styled.input`
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

  ${(props) =>
    props.theme.mq.tablet &&
    css`
      width: 100%;
    `}
`;

type InputNumberProps = {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  readOnly?: boolean;
} & Omit<
  ComponentPropsWithoutRef<'input'>,
  'type' | 'value' | 'min' | 'max' | 'onChange' | 'readOnly'
>;

const InputNumber = ({
  value,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  onChange,
  readOnly,
  ...restProps
}: InputNumberProps) => {
  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const { valueAsNumber } = e.target;
      if (isNaN(valueAsNumber)) {
        onChange(min);
        return;
      }
      onChange(valueAsNumber);
    }
  };

  return (
    <Input
      type="number"
      value={value}
      min={min}
      max={max}
      onChange={_onChange}
      readOnly={readOnly}
      {...restProps}
    />
  );
};

export default InputNumber;
