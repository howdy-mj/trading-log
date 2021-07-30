import styled from '@emotion/styled';

import ButtonComponent from '~components/Button';

const DetailPage = () => {
  return (
    <MainWrap>
      <ButtonWrap>
        <ButtonComponent label="수정" onClick={() => console.log('hi')} />
        <ButtonComponent label="삭제" onClick={() => console.log('hi')} />
      </ButtonWrap>
      <div>Detail Page</div>
    </MainWrap>
  );
};

export default DetailPage;

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const ButtonWrap = styled.div`
  display: flex;

  margin-bottom: 20px;

  > button {
    :first-of-type {
      margin-right: 10px;
    }
  }
`;
