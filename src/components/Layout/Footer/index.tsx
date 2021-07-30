import styled from '@emotion/styled';

const FooterComponent = () => {
  return (
    <FooterWrap>
      <div>문의: hi.minjungkim@gmail.com</div>
    </FooterWrap>
  );
};

export default FooterComponent;

const FooterWrap = styled.footer`
  border-top: 1px solid #adb5bd;
  height: 100px;

  > div {
    margin-top: 10px;
    color: #495057;
    font-size: 14px;
  }
`;
