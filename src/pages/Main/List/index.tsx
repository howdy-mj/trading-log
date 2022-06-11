import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { PREDICT, PostWithId } from '~models/post.model';
import { selectPostList } from '~store/post/selector';

import Loading from '~components/common/Loading';
import Pagination from '~components/Pagination';
import { commaNumber } from '~utils/numbers';

const POST_PER_PAGE = 10;

interface ListProps {
  isLoading: boolean;
}

const ListComponent = ({ isLoading }: ListProps) => {
  const history = useHistory();
  const postList = useSelector(selectPostList);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentPostList, setCurrentPostList] = useState<PostWithId[]>([]);
  const [totalPageNum, setTotalPageNum] = useState<number>(0);

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

  const linkToDetail = (id: string) => {
    history.push(`/detail/${id}`);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Section>
            <table>
              <colgroup>
                <col />
                <col style={{ width: '30%' }} />
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>제목</th>
                  <th>예상</th>
                  <th>타겟</th>
                  <th>작성일자</th>
                </tr>
              </thead>
              <tbody>
                {postList.length === 0 && (
                  <TR empty>
                    <td colSpan={5}>일지를 작성해주세요.</td>
                  </TR>
                )}
                {currentPostList?.map((post, idx) => (
                  <TR key={post.id} onClick={() => linkToDetail(post.id)}>
                    <td>{idx + 1}</td>
                    <td>{post.title}</td>
                    <td>
                      <Predict isUp={post.predict === PREDICT.UP}>
                        {post.predict}
                      </Predict>
                    </td>
                    <td>{commaNumber(post.target)}</td>
                    <td>{post.createdAt.slice(0, 10)}</td>
                  </TR>
                ))}
              </tbody>
              {/* <TFoot>
            <tr>
              <td colSpan={4}>Total</td>
              <td>{postList.length}</td>
            </tr>
          </TFoot> */}
            </table>
          </Section>
          {postList.length > 10 && (
            <Pagination
              totalPageNum={totalPageNum}
              currentPage={currentPage}
              changePage={changeCurrentPage}
            />
          )}
        </>
      )}
    </>
  );
};

export default ListComponent;

const Section = styled.section`
  > table {
    width: 100%;
  }
  @media ${(props) => props.theme.mq.mobile} {
    overflow-x: scroll;
    > table {
      min-width: 660px;
    }
  }
`;

const TR = styled.tr<{ empty?: boolean }>`
  cursor: pointer;
  > td {
    text-align: center;
    height: 3rem;
  }
  ${(props) =>
    props.empty &&
    css`
      cursor: auto;
      > td {
        padding: 30px 0;
      }
    `}
`;

const Predict = styled.span<{ isUp: boolean }>`
  color: ${(props) =>
    props.isUp ? props.theme.color.up : props.theme.color.down};
  border: 1px solid
    ${(props) => (props.isUp ? props.theme.color.up : props.theme.color.down)};
  border-radius: 1.5rem;
  padding: 0 0.8rem;
`;

// const TFoot = styled.tfoot`
//   tr {
//     td {
//       :first-child {
//         text-align: center;
//       }
//     }
//   }
// `;
