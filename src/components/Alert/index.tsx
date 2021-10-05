import styled from '@emotion/styled';

interface AlertProps {
  errorMessage: string;
  confirmText?: string;
  cancelText?: string;
}

const AlertComponent = ({
  errorMessage,
  confirmText = '확인',
  cancelText,
}: AlertProps) => {
  return (
    <AlertWrap>
      <p>{errorMessage}</p>
    </AlertWrap>
  );
};

export default AlertComponent;

const AlertWrap = styled.div``;
