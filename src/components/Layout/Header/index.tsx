import styled from '@emotion/styled';

import { TiThMenu } from 'react-icons/ti';

import { Title } from '@components/Title';

const Header = () => {
  return (
    <HeaderWrap>
      <Title />
      {/* TODO: 메뉴 필요 유무 결정 */}
      <MenuIcon>
        <TiThMenu />
      </MenuIcon>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  position: relative;
`;

const MenuIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  cursor: pointer;

  > svg {
    font-size: 25px;
  }
`;

export default Header;
