import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface ButtonProps {
  label: string;
  status?: 'info' | 'active' | 'danger';
  onClick?: () => void;
}

const ButtonComponent = ({ label, status = 'info', onClick }: ButtonProps) => {
  return (
    <Button onClick={onClick} status={status}>
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
  width: 100px;
  height: 30px;
  border-radius: 5px;

  color: white;
  background-color: #adb5bd;
  font-weight: bold;
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
`;
