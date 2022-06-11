import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';

import { fetchPosts } from '~store/post/reducer';
import { selectFirebaseToken, selectUid } from '~store/auth/selector';

import Button from '~components/common/Button';
import List from './List';

const Main = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const idToken = useSelector(selectFirebaseToken);
  const uid = useSelector(selectUid);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (uid && idToken) {
      dispatch(fetchPosts({ uid, idToken }));
      setIsLoading(false);
    }
  }, [uid, idToken]);

  return (
    <MainWrap>
      <ButtonWrap>
        <Button
          label="글쓰기"
          status="active"
          onClick={() => history.push('/write')}
        />
      </ButtonWrap>
      <List isLoading={isLoading} />
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const ButtonWrap = styled.div`
  margin-bottom: 20px;
`;
