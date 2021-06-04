import styled from '@emotion/styled';
import usePathname from '@hooks/usePathname';
import { useEffect, useState } from 'react';

const Edit = () => {
  const pathName = usePathname();
  const [isMain, setIsMain] = useState(false);

  useEffect(() => {
    if (pathName === '/') {
      setIsMain(true);
    } else {
      setIsMain(false);
    }
  }, [pathName]);

  return (
    <EditWrap>
      {isMain ? (
        <Button>글쓰기</Button>
      ) : (
        <>
          <Button>수정</Button>
          <Button>삭제</Button>
        </>
      )}
    </EditWrap>
  );
};

export default Edit;

const EditWrap = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  cursor: pointer;
  width: 100px;
  height: 30px;
  border-radius: 5px;

  color: white;
  background-color: #adb5bd;
  font-weight: bold;
`;
