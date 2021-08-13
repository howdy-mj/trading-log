import { Alert } from '@blueprintjs/core';

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
    <Alert
      canOutsideClickCancel={true}
      confirmButtonText={confirmText}
      cancelButtonText={cancelText}
    >
      <p>{errorMessage}</p>
    </Alert>
  );
};

export default AlertComponent;
