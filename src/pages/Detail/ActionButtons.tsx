import styled from '@emotion/styled';
import { useHistory, useParams } from 'react-router-dom';
import { deletePost, getPost } from '~api/post';

import ButtonComponent from '~components/Button';

import { DetailParams } from './index';

interface Props {
  amend: boolean;
  clickAmendButton: (e?: any) => void;
  cancelAmend: () => void;
}

const ActionButtons = ({ amend, clickAmendButton, cancelAmend }: Props) => {
  const params: DetailParams = useParams();
  const history = useHistory();

  const removePost = () => {
    deletePost(params.id).then((res) => {
      history.push('/');
    });
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
          onClick={() => removePost()}
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
