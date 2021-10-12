import styled from '@emotion/styled';

const Loading = () => {
  return (
    <LoadingWrap>
      <Spinner />
    </LoadingWrap>
  );
};

export default Loading;

const LoadingWrap = styled.div`
  /* position: absolute; */
  /* width: 100vw;
  height: 100vh; */
  text-align: center;
`;

const Spinner = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid #005f60;
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 0.7s ease-in-out infinite;
  -webkit-animation: spin 0.7s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
