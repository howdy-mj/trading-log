import React from 'react';
import styled from '@emotion/styled';

const TextAreaWrap = styled.textarea`
  min-height: 15rem;
  width: calc(100% - 30rem);
  resize: none;

  :focus {
    outline: none !important;
    border-color: ${(props) => props.theme.color.active};
    border-width: 2px;
  }
`;

const Textarea = () => {
  return <TextAreaWrap />;
};

export default Textarea;
