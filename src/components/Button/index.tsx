import styled from '@emotion/styled';

interface ButtonProps {
  label: string;
  status?: 'info' | 'active' | 'danger';
  onClick?: () => void;
}

const ButtonComponent = ({ label, onClick }: ButtonProps) => {
  return <Button onClick={onClick}>{label}</Button>;
};

export default ButtonComponent;

const Button = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;
  border-radius: 5px;

  color: white;
  background-color: #adb5bd;
  font-weight: bold;
`;
