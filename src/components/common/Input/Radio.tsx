import React, { ComponentPropsWithoutRef } from 'react';
import styled from '@emotion/styled';

const Input = styled.input``;

type RadioProps = {
  value: string;
  checked: boolean;
  onChange: (e: any) => void;
} & Omit<ComponentPropsWithoutRef<'input'>, 'value' | 'checked' | 'onChange'>;

const Radio = ({ value, checked, onChange, ...restProps }: RadioProps) => {
  return (
    <Input
      type="radio"
      id={value}
      name={value}
      checked={checked}
      onChange={(e) => {
        console.log('here', e);
        onChange(e);
      }}
      {...restProps}
    />
  );
};

export default Radio;
