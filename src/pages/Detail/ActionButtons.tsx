import styled from '@emotion/styled';
import ButtonComponent from '~components/Button';

interface Props {
  amend: boolean;
  clickAmendButton: (e?: any) => void;
  cancelAmend: () => void;
}

const ActionButtons = ({ amend, clickAmendButton, cancelAmend }: Props) => {
  const deletePost = () => {
    // TODO: delete
    console.log('delete');
  };

  return (
    <ButtonWrap>
      <ButtonComponent
        label={amend ? '수정완료' : '수정'}
        status="active"
        onClick={(e) => clickAmendButton(e)}
      />
      {amend ? (
        <ButtonComponent
          label="취소"
          status="info"
          onClick={() => cancelAmend()}
        />
      ) : (
        <ButtonComponent
          label="삭제"
          status="danger"
          onClick={() => deletePost()}
        />
      )}
    </ButtonWrap>
  );
};

export default ActionButtons;

const ButtonWrap = styled.div`
  display: flex;

  margin-bottom: 20px;

  > button {
    :first-of-type {
      margin-right: 10px;
    }
  }
`;
