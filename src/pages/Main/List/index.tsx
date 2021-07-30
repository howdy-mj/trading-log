import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { HTMLTable } from '@blueprintjs/core';
import { useHistory } from 'react-router-dom';

const mockData = [
  {
    id: 1,
    title: '비트코인',
    prediction: true,
    date: dayjs(),
  },
  {
    id: 2,
    title: '이더리움',
    prediction: false,
    date: dayjs(),
  },
];

const ListComponent = () => {
  const history = useHistory();

  const linkToDetail = (id: number) => {
    history.push(`/detail/${id}`);
  };
  return (
    // <ListWrap>
    //   <ListHeader>
    //     <div>No.</div>
    //     <div>제목</div>
    //     <div>예상</div>
    //     <div>날짜</div>
    //   </ListHeader>
    //   {mockData.map((list) => (
    //     <ListBody key={list.id} onClick={() => linkToDetail()}>
    //       <div>{list.id}</div>
    //       <div>{list.title}</div>
    //       <div>
    //         <span>{list.prediction ? '상승' : '하락'}</span>
    //       </div>
    //       <div>{list.date.format('YYYY-MM-DD')}</div>
    //     </ListBody>
    //   ))}
    // </ListWrap>
    <HTMLTable interactive>
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>예상</th>
          <th>날짜</th>
        </tr>
      </thead>
      <tbody>
        {mockData.map((list) => (
          <TR key={list.id} onClick={() => linkToDetail(list.id)}>
            <td>{list.id}</td>
            <td>{list.title}</td>
            <td>
              <span>{list.prediction ? '상승' : '하락'}</span>
            </td>
            <td>{list.date.format('YYYY-MM-DD')}</td>
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

const ListWrap = styled.div`
  width: 100%;
`;

const ListStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  > div {
    text-align: center;
    :first-of-type {
      width: 100px;
    }
    :nth-of-type(2) {
      width: 100%;
    }
    :nth-of-type(3) {
      width: 200px;
    }
    :last-child {
      width: 200px;
    }
  }
`;

const ListHeader = styled(ListStyle)`
  border: 2px solid black;
  height: 30px;
`;

const ListBody = styled(ListStyle)`
  border: 1px solid gray;
  margin-bottom: 0;
  padding: 5px 0;
`;

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
