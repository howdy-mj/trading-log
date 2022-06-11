import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem 0;
`;

const TitleText = styled.span`
  display: inline-block;
  width: 7rem;
  text-align: center;
  font-weight: bold;
`;

type InputWithTitleProps = {
  title: string;
  child: React.ReactNode;
};

const InputWithTitle = ({ title, child }: InputWithTitleProps) => {
  return (
    <Container>
      <TitleText>{title}</TitleText>
      {child}
    </Container>
  );
};

export default InputWithTitle;
