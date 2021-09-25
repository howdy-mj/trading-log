import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ButtonProps {
  label: string;
  status?: 'info' | 'active' | 'danger';
  onClick?: (e?: any) => void;
  disabled?: boolean;
}

const ButtonComponent = ({
  label,
  status = 'info',
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <Button onClick={onClick} status={status} disabled={disabled}>
      {label}
    </Button>
  );
};

export default ButtonComponent;

interface ButtonStyleProps {
  status?: 'info' | 'active' | 'danger';
}

const Button = styled.button<ButtonStyleProps>`
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

  ${(props) =>
    props.status === 'danger' &&
    css`
      background-color: ${props.theme.color.danger};
    `}

  ${(props) =>
    props.status === 'active' &&
    css`
      background-color: ${props.theme.color.active};
    `}

    &:disabled {
    background-color: gray !important;
  }
`;
