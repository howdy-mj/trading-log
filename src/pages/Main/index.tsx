import styled from '@emotion/styled';

import List from './_fragments/List';
import Edit from './_fragments/Edit';

const Main = () => {
  return (
    <MainWrap>
      <List />
      <Edit />
    </MainWrap>
  );
};

export default Main;

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;
