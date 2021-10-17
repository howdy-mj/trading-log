/** @jsxImportSource @emotion/react */
import { useHistory } from 'react-router-dom';

import { TitleStyle } from '~components/Typography';

export const Title = () => {
  const history = useHistory();

  return (
    <h1 css={TitleStyle} onClick={() => history.push('/')}>
      매매일지 티록
    </h1>
  );
};
