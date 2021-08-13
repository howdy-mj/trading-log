import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface InputProps {
  type?: 'text' | 'textarea' | 'radio';
  title: string;
  value?: string;
  onChange?: (e: any) => void;
  readonly?: boolean;
  required?: boolean;
  validation?: boolean;
  validationText?: string;
  /** type="radio" */
  radioInfo?: {
    name: string;
  }[];
}

const InputComponent = ({
  type = 'text',
  title,
  value,
  radioInfo,
  onChange,
  readonly = false,
  required = false,
  validation,
  validationText = '필수 입력 값 입니다',
}: InputProps) => {
  const inputResult = () => {
    switch (type) {
      case 'text':
        return (
          <InputWrap>
            <Input
              type={type}
              value={value}
              onChange={onChange}
              readOnly={readonly}
              required={required}
              validation={!!validation}
            />
            {validation === false && <p>{validationText}</p>}
          </InputWrap>
        );
      case 'radio':
        return (
          <RadioWrap onChange={onChange}>
            {radioInfo?.map((radio) => (
              <div key={radio.name}>
                <input
                  type={type}
                  id={radio.name}
                  checked={value === radio.name}
                  readOnly
                />
                <label form={radio.name}>{radio.name}</label>
              </div>
            ))}
          </RadioWrap>
        );
      case 'textarea':
        return <TextAreaWrap />;
    }
  };

  return (
    <LabelWrap>
      <span>{title}</span>
      {inputResult()}
    </LabelWrap>
  );
};

export default InputComponent;

const LabelWrap = styled.label`
  display: flex;
  width: 100%;
  margin: 10px 0;

  > span {
    display: inline-block;
    width: 70px;
    text-align: center;
    font-weight: bold;
  }
`;

const InputWrap = styled.div`
  width: calc(100% - 300px);

  > p {
    font-size: 12px;
    color: ${(props) => props.theme.color.danger};
  }
`;

const Input = styled.input<{ readOnly: boolean; validation: boolean }>`
  border-bottom: 1px solid gainsboro;

  :focus {
    border-color: ${(props) => props.theme.color.active};
    border-width: 2px;
  }
  ${(props) =>
    props.readOnly &&
    css`
      :focus {
        border-color: gainsboro;
        border-width: 1px;
      }
    `}

  /* ${(props) =>
    !!props.validation &&
    css`
      border-color: ${props.theme.color.danger};
    `} */

  ${(props) =>
    props.theme.mq.tablet &&
    css`
      width: 100%;
    `}
`;

const RadioWrap = styled.div`
  display: flex;
  > div {
    :not(:last-child) {
      margin-right: 10px;
    }
  }
`;

const TextAreaWrap = styled.textarea`
  min-height: 150px;
  width: calc(100% - 300px);
  resize: none;

  :focus {
    outline: none !important;
    border-color: ${(props) => props.theme.color.active};
    border-width: 2px;
  }
`;
