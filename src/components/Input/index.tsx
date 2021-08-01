import styled from '@emotion/styled';

interface InputProps {
  type?: 'text' | 'textarea' | 'radio';
  title: string;
  value?: string;
  onChange?: (e: any) => void;
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
}: InputProps) => {
  const inputResult = () => {
    switch (type) {
      case 'text':
        return <InputWrap type={type} value={value} onChange={onChange} />;
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

export const LabelWrap = styled.label`
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

const InputWrap = styled.input`
  border-bottom: 1px solid grey;
  width: calc(100% - 300px);

  :focus {
    border-color: ${(props) => props.theme.color.active};
    border-width: 2px;
  }
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
