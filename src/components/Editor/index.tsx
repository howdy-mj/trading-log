import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ReactQuill from 'react-quill';

import useHeight from '~hooks/useHeight';
import useWidth from '~hooks/useWidth';
import usePathname from '../../hooks/usePathname';

const quillToolbar = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image'],
    ['clean'],
  ],
};

// const quillFormats = [
//   'header',
//   'bold',
//   'italic',
//   'underline',
//   'strike',
//   'blockquote',
//   'list',
//   'bullet',
//   'indent',
//   'link',
//   'image',
// ];

interface EditorProps {
  value: string;
  onChange: (text: string) => void;
  readOnly?: boolean;
}

const Editor = ({ value, onChange, readOnly = false }: EditorProps) => {
  const width = useWidth();
  const height = useHeight();
  const { includePath } = usePathname('detail');

  return (
    <EditorWrap includePath={includePath}>
      <ReactQuill
        theme={readOnly ? 'bubble' : 'snow'}
        value={value}
        onChange={onChange}
        modules={quillToolbar}
        readOnly={readOnly}
        style={{ height: `${width < 500 ? height - 350 : 500}px` }}
      />
    </EditorWrap>
  );
};

export default Editor;

const EditorWrap = styled.div<{ includePath: boolean }>`
  /** detail page */
  ${(props) =>
    props.includePath &&
    css`
      .quill {
        height: max-content !important;
      }
      .ql-tooltip {
        display: none !important;
      }
    `}

  .ql-container {
    height: 90%;
  }

  @media ${(props) => props.theme.mq.mobile} {
    .ql-container {
      height: 80%;
    }
  }
`;
