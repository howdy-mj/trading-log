import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import ButtonComponent from '~components/Button';
import InputComponent from '~components/Input';
import { MarketInfo, Predict } from '~models/write.model';
import {
  updateContent,
  updateMarket,
  updatePredict,
  updateTarget,
  updateTitle,
} from '~store/write/reducer';
import {
  selectContentValue,
  selectMarketValue,
  selectPredictValue,
} from '~store/write/selector';

const marketInfo = [
  { name: MarketInfo.KRW },
  { name: MarketInfo.BTC },
  { name: MarketInfo.USDT },
];
const predictInfo = [{ name: Predict.UP }, { name: Predict.DOWN }];

const WritePage = () => {
  const dispatch = useDispatch();
  const marketValue = useSelector(selectMarketValue);
  const predictValue = useSelector(selectPredictValue);
  const contentValue = useSelector(selectContentValue);

  const editorRef = useRef<Editor>(null);

  const handleSubmit = () => {
    // TODO: 제출 후 액션 지정
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().removeHook('addImageBlobHook');
      editorRef.current
        .getInstance()
        .addHook('addImageBlobHook', (blob, callback) => {
          console.log('blob', blob);
          (async () => {
            const formData = new FormData();
            formData.append('file', blob);
            console.log('formDat', formData);
            axios.defaults.withCredentials = true;
            // const { data: url } = await axios.post(
            //   `${backUrl}image.do`,
            //   formData,
            //   {
            //     header: { 'content-type': 'multipart/formdata' },
            //   },
            // );
            // callback(url, 'alt text');
          })();

          return false;
        });
    }
    return () => {};
  }, [editorRef]);

  return (
    <Form onSubmit={() => handleSubmit()}>
      <InputComponent
        title="제목"
        onChange={(e) => dispatch(updateTitle(e.target.value))}
      />
      <InputComponent
        title="마켓"
        type="radio"
        radioInfo={marketInfo}
        value={marketValue}
        onChange={(e) => dispatch(updateMarket(e.target.id))}
      />
      <InputComponent
        title="예상"
        type="radio"
        radioInfo={predictInfo}
        value={predictValue}
        onChange={(e) => dispatch(updatePredict(e.target.id))}
      />
      <InputComponent
        title="타겟가"
        onChange={(e) => dispatch(updateTarget(e.target.value))}
      />
      <EditorWrap>
        <span>근거</span>
        <Editor
          initialValue={contentValue}
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          usageStatistics={false}
          ref={editorRef}
          language="ko"
          height="500px"
          onChange={() => {
            const content = editorRef.current?.getInstance().getMarkdown();
            dispatch(updateContent(content));
          }}
        />
      </EditorWrap>

      <ActionWrap>
        <ButtonComponent
          label="작성하기"
          status="active"
          onClick={() => handleSubmit()}
        />
      </ActionWrap>
    </Form>
  );
};

export default WritePage;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const EditorWrap = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0;
  > span {
    display: inline-block;
    width: 70px;
    text-align: center;
    font-weight: bold;
  }

  > div {
    width: calc(100% - 300px);
  }

  ${(props) =>
    props.theme.mq.tablet &&
    css`
      > div {
        width: 100%;
      }
    `}
`;

const ActionWrap = styled.div`
  display: flex;
  /* justify-content: flex-end; */

  margin-top: 20px;
`;
