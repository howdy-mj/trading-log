import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import { fetchPosts } from '~store/post/reducer';
import { selectPostList } from '~store/post/selector';
import { PostWithId } from '~models/post.model';

import ButtonComponent from '~components/Button';

interface Params {
  id: string;
}

const DetailPage = () => {
  const params: Params = useParams();
  const dispatch = useDispatch();
  const postsInfo = useSelector(selectPostList);
  const [currentPost, setCurrentPost] = useState<PostWithId>();

  useEffect(() => {
    dispatch(fetchPosts());
    const result = postsInfo.filter((info) => info.id === params.id)[0];
    setCurrentPost(result);
  }, []);

  return (
    <MainWrap>
      <ButtonWrap>
        <ButtonComponent label="수정" onClick={() => console.log('amend')} />
        <ButtonComponent label="삭제" onClick={() => console.log('delete')} />
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
