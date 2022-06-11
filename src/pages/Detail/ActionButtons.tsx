import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import { deletePost } from '~api/post';
import { selectFirebaseToken, selectUid } from '~store/auth/selector';
import Button from '~components/common/Button';
import Modal from '~components/Modal';

import { DetailParams } from './index';
import {
  selectAmendTargetValue,
  selectAmendTitleValue,
} from '~store/detail/selector';

interface Props {
  amend: boolean;
  clickAmendButton: () => void;
  cancelAmend: () => void;
}

const ActionButtons = ({ amend, clickAmendButton, cancelAmend }: Props) => {
  const params: DetailParams = useParams();
  const history = useHistory();
  const idToken = useSelector(selectFirebaseToken);
  const uid = useSelector(selectUid);

  const titleValue = useSelector(selectAmendTitleValue);
  const targetValue = useSelector(selectAmendTargetValue);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const removePost = () => {
    deletePost(params.id, uid, idToken).then(() => {
      history.push('/');
    });
  };

  return (
    <ButtonWrap>
      <Button
        label={amend ? '수정완료' : '수정'}
        status="active"
        onClick={clickAmendButton}
        disabled={amend && (!titleValue || !targetValue)}
      />
      {amend ? (
        <Button label="취소" status="info" onClick={() => cancelAmend()} />
      ) : (
        <>
          <Button
            label="삭제"
            status="danger"
            onClick={() => setIsDeleteModalOpen(true)}
          />
          <Modal
            description="해당 글을 삭제하시겠습니까?"
            isShow={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            onConfirm={() => removePost()}
          />
        </>
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
