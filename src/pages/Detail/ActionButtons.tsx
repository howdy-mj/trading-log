import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deletePost } from '~api/post';

import { selectFirebaseToken, selectUid } from '~store/auth/selector';
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
  const idToken = useSelector(selectFirebaseToken);
  const uid = useSelector(selectUid);

  const removePost = () => {
    deletePost(params.id, uid, idToken).then((res) => {
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
