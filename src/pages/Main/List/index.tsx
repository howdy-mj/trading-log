import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { HTMLTable } from '@blueprintjs/core';

import { selectPostList } from '~store/post/selector';

const ListComponent = () => {
  const history = useHistory();
  const postsInfo = useSelector(selectPostList);

  const linkToDetail = (id: string) => {
    history.push(`/detail/${id}`);
  };

  return (
    <HTMLTable interactive>
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
          <td colSpan={3}>Total</td>
          <td>{mockData.length}</td>
        </tr>
      </TFoot> */}
    </HTMLTable>
  );
};

export default ListComponent;

const TR = styled.tr`
  > td {
    text-align: center;
  }
`;

const TFoot = styled.tfoot`
  tr {
    td {
      :first-child {
        text-align: center;
      }
    }
  }
`;
