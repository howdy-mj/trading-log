import React, { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import InputText from '~components/common/Input/InputText';
import styled from '@emotion/styled';

const Container = styled.div`
  width: calc(100% - 30rem);

  @media ${(props) => props.theme.mq.mobile} {
    width: calc(100% - 7rem);
  }
`;

const ValidationText = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.color.danger};
`;

type InputTextWithValidationProps = {
  validate: boolean;
  validationText?: string;
} & PropsWithChildren<{}>;

const InputWithValidation = ({
  validate,
  validationText = '필수 입력 값 입니다',
  children,
}: InputTextWithValidationProps) => {
  return (
    <Container>
      {children}
      {!validate && <ValidationText>{validationText}</ValidationText>}
    </Container>
  );
};

export default InputWithValidation;
