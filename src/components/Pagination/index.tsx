import styled from '@emotion/styled';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

interface PaginationProps {
  totalPageNum: number;
  currentPage: number;
  changePage: (isPrev: boolean) => void;
}

const Pagination = ({
  totalPageNum,
  currentPage,
  changePage,
}: PaginationProps) => {
  return (
    <PaginationWrap>
      <PaginationContainer>
        <ArrowButton onClick={() => changePage(true)}>
          <AiOutlineLeft />
        </ArrowButton>
        <div className="content">
          {currentPage} / <span className="totalPage">{totalPageNum}</span>
        </div>
        <ArrowButton onClick={() => changePage(false)}>
          <AiOutlineRight />
        </ArrowButton>
      </PaginationContainer>
    </PaginationWrap>
  );
};

export default Pagination;

const PaginationWrap = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;

  .content {
    margin: 0 1rem;
  }

  .totalPage {
    color: #8e8e8e;
  }
`;

const ArrowButton = styled.button`
  padding: 0.3rem;
  border: 1px solid #888888;
  border-radius: 6px;
  cursor: pointer;
  > svg {
    display: block;
    margin: 0;
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    background-color: #e5e5e5;
  }
`;
