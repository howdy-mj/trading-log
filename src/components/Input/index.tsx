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
  pattern?: string;
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
  pattern = '',
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
              pattern={pattern}
            />
            {validation === false && <p>{validationText}</p>}
          </InputWrap>
        );
      case 'radio':
        return (
          <RadioWrap>
            {/* TODO: 범위 외 클릭시 에러 */}
            {radioInfo?.map((radio) => (
              <div key={radio.name} onChange={onChange} className="radio">
                <input
                  type={type}
                  id={radio.name}
                  checked={value === radio.name}
                  readOnly
                />
                <label htmlFor={radio.name}>{radio.name}</label>
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
  margin: 1rem 0;

  > span {
    display: inline-block;
    width: 7rem;
    text-align: center;
    font-weight: bold;
  }
`;

const InputWrap = styled.div`
  width: calc(100% - 30rem);

  > p {
    font-size: 12px;
    color: ${(props) => props.theme.color.danger};
  }

  @media ${(props) => props.theme.mq.mobile} {
    width: calc(100% - 7rem);
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

  .radio {
    :not(:last-child) {
      margin-right: 1rem;
    }

    input {
      margin-right: 0.5rem;
    }
  }
`;

const TextAreaWrap = styled.textarea`
  min-height: 15rem;
  width: calc(100% - 30rem);
  resize: none;

  :focus {
    outline: none !important;
    border-color: ${(props) => props.theme.color.active};
    border-width: 2px;
  }
`;
