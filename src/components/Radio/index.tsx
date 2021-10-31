import styled from '@emotion/styled';

interface RadioProps {
  value: string;
  title: string;
  selectInfo: string[];
  onChange: (e: any) => void;
  isMulti?: boolean;
  readonly?: boolean;
  // onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Radio = ({
  isMulti = false,
  title,
  value,
  selectInfo,
  onChange,
  readonly = false,
}: RadioProps) => {
  return (
    <CheckboxWrap>
      <span>{title}</span>
      {selectInfo.map((info) => (
        <ItemWrap key={info} readonly={readonly}>
          <label htmlFor={info}>
            <input
              type={isMulti ? 'checkbox' : 'radio'}
              id={info}
              name={info}
              checked={info === value}
              onChange={(e) => {
                if (readonly) return;
                onChange(e);
              }}
            />
            <span>{info}</span>
          </label>
        </ItemWrap>
      ))}
    </CheckboxWrap>
  );
};

export default Radio;

const CheckboxWrap = styled.div`
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

const ItemWrap = styled.div<{ readonly: boolean }>`
  input[type='radio'] {
    display: none;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & + span {
      height: 2.4rem;
      padding: 0 0.7rem;
      margin-right: 0.5rem;

      background: none;
      border: 1px solid #dfdfdf;
      border-radius: 4px;
      font-size: 15px;
      // TODO: 동작 제대로 안함
      cursor: ${(readonly) => (readonly ? 'auto' : 'pointer')};
    }

    &:checked + span {
      border: 1px solid #5c97bf;
      border-radius: 4px;
      background: #5c97bf;
      color: #fff;
    }
  }
`;
