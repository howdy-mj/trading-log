import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import dayjs from 'dayjs';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { isNumber } from 'is-validated';

import { createPost } from '~api/post';
import useWidth from '~hooks/useWidth';
import useHeight from '~hooks/useHeight';

import { marketRadioInfo, predictRadioInfo } from '~models/post.model';
import Button from '~components/Button';
import InputComponent from '~components/Input';

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
import { selectFirebaseToken, selectUid } from '~store/auth/selector';

const WritePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const width = useWidth();
  const height = useHeight();

  const idToken = useSelector(selectFirebaseToken);
  const uid = useSelector(selectUid);

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
    createPost(data, uid, idToken).then(() => {
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
        value={targetValue === 0 ? '' : targetValue.toString()}
        validation={!!targetValue}
        onChange={(e) => {
          const { value } = e.target;
          if (!isNumber(value) || value === '') {
            return;
          }
          dispatch(changeTarget(e.target.value));
        }}
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
            height={width < 500 ? `${height - 350}px` : '500px'}
            onChange={() => {
              const content = editorRef.current?.getInstance().getMarkdown();
              dispatch(changeDescription(content));
            }}
          />
        )}
      </EditorWrap>
      <ActionWrap>
        <Button
          label="작성하기"
          status="active"
          onClick={(e) => handleSubmit(e)}
          disabled={!titleValue || !targetValue}
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

  margin: 20px 0;
`;
