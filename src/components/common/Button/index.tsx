import { ComponentPropsWithoutRef } from 'react';
import styled from '@emotion/styled';

const ButtonWrap = styled.button`
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

type ButtonStatusProps = 'info' | 'active' | 'danger';

type ButtonProps = {
  label: string;
  status?: ButtonStatusProps;
  onClick?: (e?: any) => void;
  disabled?: boolean;
} & Omit<ComponentPropsWithoutRef<'button'>, 'onClick' | 'disabled'>;

const Button = ({
  label,
  status = 'info',
  onClick,
  disabled,
  ...restProps
}: ButtonProps) => {
  return (
    <ButtonWrap
      className={status}
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {label}
    </ButtonWrap>
  );
};

export default Button;
