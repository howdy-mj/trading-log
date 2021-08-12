import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { HTMLTable } from '@blueprintjs/core';
import dayjs from 'dayjs';

import { getPost } from '~api/post';
import { Post, PostWithId } from '~models/post.model';

const ListComponent = () => {
  const history = useHistory();

  const [contentInfo, setContentInfo] = useState<PostWithId[] | null>(null);

  useEffect(() => {
    let isComponentMounted = true;
    getPost().then((res) => {
      if (isComponentMounted) {
        const { data } = res;
        const values: Post[] = Object.values(data);
        const keys = Object.keys(data);

        const result: PostWithId[] = values.map((value: Post, idx: number) => {
          return {
            id: keys[idx],
            title: value.title,
            market: value.market,
            predict: value.predict,
            target: value.target,
            content: value.content,
            createdAt: value.createdAt,
          };
        });
        setContentInfo(result);
      }
    });
    return () => {
      isComponentMounted = false;
    };
  }, []);

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
        {contentInfo?.map((info, idx) => (
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
