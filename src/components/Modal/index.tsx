import styled from '@emotion/styled';

import Portal from '../Portal';

interface ModalProps {
  type?: 'alert' | 'page';
  title?: string;
  description?: string;
  isShow: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
}

const PageModalWrapper = styled.div<{ isShow: boolean }>`
  display: ${({ isShow }) => (isShow ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  max-width: 48rem;
  z-index: 1000;
`;

const ModalOverlay = styled.div<{ isShow: boolean }>`
  display: ${({ isShow }) => (isShow ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

const AlertModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 1rem 2rem;
  width: 280px;
  height: 150px;
  z-index: 1000;
  box-shadow: 0 24px 24px 0 rgba(0, 0, 0, 0.3), 0 0 24px 0 rgba(0, 0, 0, 0.22);
  border-radius: 0.8rem;

  > h3 {
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    font-size: 1.3rem;

    > button {
      border-bottom: 2px solid transparent;
      &:hover {
        border-bottom: 2px solid black;
      }
      &:last-child {
        margin-left: 2rem;
      }
    }
  }
`;

const Modal: React.FC<ModalProps> = ({
  type = 'alert',
  isShow,
  title = '알림',
  description,
  onClose,
  onConfirm,
  children,
}) => {
  if (type === 'page') {
    return (
      <Portal elementId="modal">
        <PageModalWrapper isShow={isShow}>{children}</PageModalWrapper>
      </Portal>
    );
  }

  return (
    <Portal elementId="modal">
      <ModalOverlay isShow={isShow}>
        <AlertModalWrapper>
          <h3>{title}</h3>
          <div className="description">{description}</div>
          <div className="buttons">
            <button onClick={onClose}>아니오</button>
            <button onClick={onConfirm}>예</button>
          </div>
        </AlertModalWrapper>
      </ModalOverlay>
    </Portal>
  );
};

export default Modal;
