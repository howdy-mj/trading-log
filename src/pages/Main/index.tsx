import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';

import { fetchPosts } from '~store/post/reducer';
import { selectFirebaseToken, selectUid } from '~store/auth/selector';

import Button from '~components/common/Button';
import MainList from '~containers/Main/MainList';
import Loading from '~components/common/Loading';
import { selectPostList } from '~store/post/selector';
import Pagination from '~components/Pagination';
import { PostWithId } from '~models/post.model';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const ButtonWrap = styled.div`
  margin-bottom: 20px;
`;

const POST_PER_PAGE = 10;

const Main = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const idToken = useSelector(selectFirebaseToken);
  const uid = useSelector(selectUid);
  const postList = useSelector(selectPostList);

  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentPostList, setCurrentPostList] = useState<PostWithId[]>([]);
  const [totalPageNum, setTotalPageNum] = useState<number>(0);

  useEffect(() => {
    if (uid && idToken) {
      dispatch(fetchPosts({ uid, idToken }));
      setIsLoading(false);
    }
  }, [uid, idToken]);

  useEffect(() => {
    const totalCount = postList.length;
    if (totalCount !== 0) {
      const indexOfLastPost = currentPage * POST_PER_PAGE;
      const indexOfFirstPost = indexOfLastPost - POST_PER_PAGE;
      setTotalPageNum(Math.ceil(totalCount / POST_PER_PAGE));
      setCurrentPostList(postList.slice(indexOfFirstPost, indexOfLastPost));
    }
  }, [postList, currentPage]);

  const changeCurrentPage = (isPrev: boolean) => {
    if (isPrev) {
      if (currentPage === 1) return;
      setCurrentPage(currentPage - 1);
    } else {
      if (currentPage === totalPageNum) return;
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container>
      <ButtonWrap>
        <Button
          label="글쓰기"
          status="active"
          onClick={() => history.push('/write')}
        />
      </ButtonWrap>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MainList
            hasNoPost={postList.length === 0}
            currentPostList={currentPostList}
          />
          {postList.length > 10 && (
            <Pagination
              totalPageNum={totalPageNum}
              currentPage={currentPage}
              changePage={changeCurrentPage}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default Main;
