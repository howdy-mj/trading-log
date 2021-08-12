import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import { fetchPosts } from '~store/post/reducer';

import ButtonComponent from '~components/Button';
import List from './List';

const Main = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
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
