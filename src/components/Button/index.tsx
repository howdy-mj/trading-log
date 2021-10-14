import styled from '@emotion/styled';

interface ButtonProps {
  label: string;
  status?: 'info' | 'active' | 'danger';
  onClick?: (e?: any) => void;
  disabled?: boolean;
}

const Button = ({ label, status = 'info', onClick, disabled }: ButtonProps) => {
  return (
    <ButtonWrap
      onClick={onClick}
      status={status}
      disabled={disabled}
      className={status}
    >
      {label}
    </ButtonWrap>
  );
};

export default Button;

interface ButtonStyleProps {
  status?: 'info' | 'active' | 'danger';
}

const ButtonWrap = styled.button<ButtonStyleProps>`
  cursor: pointer;
  width: 10rem;
  height: 3rem;
  border-radius: 5px;

  color: white;
  background-color: #adb5bd;
  font-weight: bold;

  @media ${(props) => props.theme.mq.mobile} {
    width: 9rem;
  }

  &.active {
    background-color: ${(props) => props.theme.color.active};
  }
  &.danger {
    background-color: ${(props) => props.theme.color.danger};
  }

  &:disabled {
    background-color: gray !important;
  }
  &:hover {
    opacity: 0.9;
  }
`;
