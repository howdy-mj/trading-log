import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';

import { fetchPosts } from '~store/post/reducer';
import { selectFirebaseToken, selectUid } from '~store/auth/selector';

import ButtonComponent from '~components/Button';
import List from './List';

const Main = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const idToken = useSelector(selectFirebaseToken);
  const uid = useSelector(selectUid);

  useEffect(() => {
    dispatch(fetchPosts({ uid, idToken }));
  }, []);

  return (
    <MainWrap>
      <ButtonWrap>
        <ButtonComponent
          label="글쓰기"
          status="active"
          onClick={() => history.push('/write')}
        />
      </ButtonWrap>
      <List />
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
