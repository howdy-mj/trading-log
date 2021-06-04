import styled from '@emotion/styled';
import dayjs from 'dayjs';

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

const List = () => {
  return (
    <ListWrap>
      <ListHeader>
        <div>No.</div>
        <div>제목</div>
        <div>예상</div>
        <div>날짜</div>
      </ListHeader>
      {mockData.map((list) => (
        <ListBody key={list.id}>
          <div>{list.id}</div>
          <div>{list.title}</div>
          <div>
            <span>{list.prediction ? '상승' : '하락'}</span>
          </div>
          <div>{list.date.format('YYYY-MM-DD')}</div>
        </ListBody>
      ))}
    </ListWrap>
  );
};

export default List;

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
