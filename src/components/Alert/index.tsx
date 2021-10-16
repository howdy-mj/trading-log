import styled from '@emotion/styled';

interface AlertProps {
  title?: string;
  errorMessage: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Alert = ({
  title = '알림',
  errorMessage,
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  onCancel,
}: AlertProps) => {
  return (
    <AlertWrap>
      <AlertContainer>
        <h3>{title}</h3>
        <p>{errorMessage}</p>
        <ActionButtons>
          <button onClick={onConfirm}>{confirmText}</button>
          <button onClick={onCancel}>{cancelText}</button>
        </ActionButtons>
      </AlertContainer>
    </AlertWrap>
  );
};

export default Alert;

const AlertWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 30rem;
  min-height: 15rem;
  height: max-content;

  border: 1px solid #e5e5e5;
  border-radius: 6px;
  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.2);
`;

const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.5rem 1rem;
  > h3 {
    margin-bottom: 1.5rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;

  margin-top: 2rem;

  > button {
    &:nth-child(2) {
      margin-left: 1rem;
    }
  }
`;
