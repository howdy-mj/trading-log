import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { googleSignOut } from '~service/fb_auth';
import { clearAllToken } from '~utils/storage';
import { initUserData } from '~store/auth/reducer';
import { selectUserEmail } from '~store/user/selector';

import Button from '~components/Button';
import styled from '@emotion/styled';

const MyPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const userEmail = useSelector(selectUserEmail);

  const logOut = async () => {
    await googleSignOut().then(() => {
      dispatch(initUserData());
      clearAllToken();
      history.push('/login');
    });
  };

  return (
    <MyPageWrap>
      <div>
        <InformationBlock>
          <h3>내 정보</h3>
          <p>이메일: {userEmail}</p>
        </InformationBlock>

        {/* <InformationBlock>
          <h3>내 설정</h3>
        </InformationBlock> */}
      </div>
      <div>
        <Button label="로그아웃" onClick={() => logOut()} status="danger" />
      </div>
    </MyPageWrap>
  );
};

export default MyPage;

const MyPageWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  > div {
    padding: 0 2rem;
  }
`;

const InformationBlock = styled.div`
  margin-bottom: 2rem;
`;
