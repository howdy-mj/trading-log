import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';

export const Title = () => {
  const history = useHistory();

  return <TitleText onClick={() => history.push('/')}>매매일지 티록</TitleText>;
};

const TitleText = styled.h1`
  width: max-content;
  margin: 0 auto;

  font-family: 'Jua';
  cursor: pointer;
`;
