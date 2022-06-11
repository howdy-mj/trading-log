import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';

import { PostWithId, PREDICT } from '~models/post.model';

import { commaNumber } from '~utils/numbers';

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

const TR = styled.tr`
  cursor: pointer;
  > td {
    text-align: center;
    height: 3.5rem;
  }
`;

const EmptyTR = styled.tr`
  cursor: auto;
  > td {
    padding: 30px 0;
  }
`;

const PredictText = styled.span<{ isUp: boolean }>`
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
//       :first-of-type {
//         text-align: center;
//       }
//     }
//   }
// `;

type MainListProps = {
  hasNoPost: boolean;
  currentPostList: PostWithId[];
};

const MainList = ({ hasNoPost, currentPostList }: MainListProps) => {
  const history = useHistory();

  const linkToDetail = (id: string) => {
    history.push(`/detail/${id}`);
  };

  return (
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
            <th>마켓</th>
            <th>작성일자</th>
          </tr>
        </thead>
        <tbody>
          {hasNoPost && (
            <EmptyTR>
              <td colSpan={5}>일지를 작성해주세요.</td>
            </EmptyTR>
          )}
          {currentPostList?.map((post, idx) => (
            <TR key={post.id} onClick={() => linkToDetail(post.id)}>
              <td>{idx + 1}</td>
              <td>{post.title}</td>
              <td>
                <PredictText isUp={post.predict === PREDICT.UP}>
                  {post.predict}
                </PredictText>
              </td>
              <td>{commaNumber(post.target)}</td>
              <td>{post.market}</td>
              <td>{post.createdAt.slice(0, 10)}</td>
            </TR>
          ))}
        </tbody>
        {/*<TFoot>*/}
        {/*  <tr>*/}
        {/*    <td colSpan={4}>Total</td>*/}
        {/*    <td>{list.length}</td>*/}
        {/*  </tr>*/}
        {/*</TFoot>*/}
      </table>
    </Section>
  );
};

export default MainList;
