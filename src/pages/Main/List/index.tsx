import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { selectPostList } from '~store/post/selector';

import Loading from '~components/Loading';

interface ListProps {
  isLoading: boolean;
}

const ListComponent = ({ isLoading }: ListProps) => {
  const history = useHistory();
  const postsInfo = useSelector(selectPostList);

  const linkToDetail = (id: string) => {
    history.push(`/detail/${id}`);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>
            {postsInfo.length === 0 && (
              <TR empty>
                <td colSpan={5}>일지를 작성해주세요.</td>
              </TR>
            )}
            {postsInfo?.map((info, idx) => (
              <TR key={info.id} onClick={() => linkToDetail(info.id)}>
                <td>{idx + 1}</td>
                <td>{info.title}</td>
                <td>
                  <span>{info.predict}</span>
                </td>
                <td>{info.target}</td>
                <td>{info.createdAt.slice(0, 10)}</td>
              </TR>
            ))}
          </tbody>
          {/* <TFoot>
            <tr>
              <td colSpan={4}>Total</td>
              <td>{postsInfo.length}</td>
            </tr>
          </TFoot> */}
        </table>
      )}
    </>
  );
};

export default ListComponent;

const TR = styled.tr<{ empty?: boolean }>`
  cursor: pointer;
  > td {
    text-align: center;
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

// const TFoot = styled.tfoot`
//   tr {
//     td {
//       :first-child {
//         text-align: center;
//       }
//     }
//   }
// `;
