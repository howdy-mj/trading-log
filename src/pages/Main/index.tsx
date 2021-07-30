import styled from '@emotion/styled';

import ButtonComponent from '~components/Button';

import List from './List';

const Main = () => {
  return (
    <MainWrap>
      <ButtonWrap>
        <ButtonComponent
          label="글쓰기"
          status="active"
          onClick={() => console.log('hi')}
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
