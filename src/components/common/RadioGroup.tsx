import React, { ComponentPropsWithoutRef } from 'react';
import styled from '@emotion/styled';
import Radio from '~components/Input/Radio';

const RadioWrapper = styled.div`
  input {
    display: none;

    & + span {
      height: 2.4rem;
      padding: 0 0.7rem;
      margin-right: 0.5rem;

      background: none;
      border: 1px solid #dfdfdf;
      border-radius: 4px;
      font-size: 15px;
      cursor: pointer;
    }

    &:checked + span {
      border: 1px solid #5c97bf;
      border-radius: 4px;
      background: #5c97bf;
      color: #fff;
    }

    &:read-only + span {
      cursor: auto;
    }
  }
`;

const LabelText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type RadioGroupProps = {
  selection: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
} & Omit<ComponentPropsWithoutRef<'input'>, 'onChange'>;

const RadioGroup = ({
  selection,
  value,
  onChange,
  readOnly = false,
  ...restProps
}: RadioGroupProps) => {
  const preventClickIfIsReadOnly = (e: React.MouseEvent<HTMLDivElement>) => {
    if (readOnly) {
      e.preventDefault();
    }
  };

  return (
    <>
      {selection.map((data) => (
        <RadioWrapper key={data} onClick={preventClickIfIsReadOnly}>
          <label htmlFor={data}>
            <Radio
              value={data}
              checked={data === value}
              onChange={onChange}
              {...restProps}
            />
            <LabelText>{data}</LabelText>
          </label>
        </RadioWrapper>
      ))}
    </>
  );
};

export default RadioGroup;
