import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import dayjs from 'dayjs';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import ButtonComponent from '~components/Button';
import InputComponent from '~components/Input';
import { createPost } from '~api/post';
import { marketRadioInfo, predictRadioInfo } from '~models/post.model';
import {
  changeDescription,
  changeMarket,
  changePredict,
  changeTarget,
  changeTitle,
  initContent,
} from '~store/write/reducer';
import {
  selectDescriptionValue,
  selectMarketValue,
  selectPredictValue,
  selectTargetValue,
  selectTitleValue,
} from '~store/write/selector';

const WritePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const titleValue = useSelector(selectTitleValue);
  const marketValue = useSelector(selectMarketValue);
  const predictValue = useSelector(selectPredictValue);
  const targetValue = useSelector(selectTargetValue);
  const descriptionValue = useSelector(selectDescriptionValue);

  const [init, setIsInit] = useState(true);

  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    dispatch(initContent());
    setIsInit(false);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      title: titleValue,
      market: marketValue,
      predict: predictValue,
      target: targetValue,
      description: descriptionValue,
      createdAt: dayjs().toISOString(),
    };
    createPost(data).then(() => {
      history.push('/');
    });
  };

  // useEffect(() => {
  //   if (editorRef.current) {
  //     editorRef.current.getInstance().removeHook('addImageBlobHook');
  //     editorRef.current
  //       .getInstance()
  //       .addHook('addImageBlobHook', (blob, callback) => {
  //         console.log('blob', blob);
  //         (async () => {
  //           const formData = new FormData();
  //           formData.append('file', blob);
  //           console.log('formDat', formData);
  //           axios.defaults.withCredentials = true;
  //           // const { data: url } = await axios.post(
  //           //   `${backUrl}image.do`,
  //           //   formData,
  //           //   {
  //           //     header: { 'content-type': 'multipart/formdata' },
  //           //   },
  //           // );
  //           // callback(url, 'alt text');
  //         })();
  //         return false;
  //       });
  //   }
  //   return () => {};
  // }, [editorRef]);

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <InputComponent
        title="제목"
        validation={!!titleValue}
        onChange={(e) => dispatch(changeTitle(e.target.value))}
      />
      <InputComponent
        title="마켓"
        type="radio"
        radioInfo={marketRadioInfo}
        value={marketValue}
        onChange={(e) => dispatch(changeMarket(e.target.id))}
      />
      <InputComponent
        title="예상"
        type="radio"
        radioInfo={predictRadioInfo}
        value={predictValue}
        onChange={(e) => dispatch(changePredict(e.target.id))}
      />
      <InputComponent
        title="타겟가"
        validation={!!targetValue}
        onChange={(e) => dispatch(changeTarget(e.target.value))}
      />
      <EditorWrap>
        {init === false && (
          <Editor
            initialValue={descriptionValue}
            initialEditType="wysiwyg"
            useCommandShortcut={true}
            usageStatistics={false}
            ref={editorRef}
            language="ko"
            height="500px"
            onChange={() => {
              const content = editorRef.current?.getInstance().getMarkdown();
              dispatch(changeDescription(content));
            }}
          />
        )}
      </EditorWrap>
      <ActionWrap>
        <ButtonComponent
          label="작성하기"
          status="active"
          onClick={(e) => handleSubmit(e)}
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
