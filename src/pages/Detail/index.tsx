import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Editor, Viewer } from '@toast-ui/react-editor';

import { putPost } from '~api/post';
import { fetchPosts } from '~store/post/reducer';
import { marketRadioInfo, predictRadioInfo } from '~models/post.model';

import { selectPostList } from '~store/post/selector';
import {
  changeDescription,
  changeMarket,
  changePredict,
  changeTarget,
  changeTitle,
  loadContent,
} from '~store/write/reducer';
import {
  selectDescriptionValue,
  selectCreatedAt,
  selectId,
  selectMarketValue,
  selectPredictValue,
  selectTargetValue,
  selectTitleValue,
} from '~store/write/selector';
import { selectFirebaseToken, selectUid } from '~store/auth/selector';

import InputComponent from '~components/Input';
import ActionButtons from './ActionButtons';

export interface DetailParams {
  id: string;
}

const DetailPage = () => {
  const params: DetailParams = useParams();
  const dispatch = useDispatch();
  const postsInfo = useSelector(selectPostList);
  const idToken = useSelector(selectFirebaseToken);
  const uid = useSelector(selectUid);

  const id = useSelector(selectId);
  const titleValue = useSelector(selectTitleValue);
  const marketValue = useSelector(selectMarketValue);
  const predictValue = useSelector(selectPredictValue);
  const targetValue = useSelector(selectTargetValue);
  const descriptionValue = useSelector(selectDescriptionValue);
  const createdAt = useSelector(selectCreatedAt);

  const editorRef = useRef<Editor>(null);

  const [init, setIsInit] = useState(true);
  const [amend, setAmend] = useState<boolean>(false);

  useEffect(() => {
    if (uid && idToken) {
      dispatch(fetchPosts({ uid, idToken }));
      setIsInit(false);
    }
  }, [uid, idToken]);

  useEffect(() => {
    const result = postsInfo.filter((info) => info.id === params.id)[0];
    if (result) {
      dispatch(
        loadContent({
          id: result.id,
          title: result.title,
          market: result.market,
          predict: result.predict,
          target: result.target,
          description: result.description,
          createdAt: result.createdAt,
        }),
      );
    }
  }, [postsInfo]);

  const clickAmendButton = (e: any) => {
    if (amend) {
      e.preventDefault();
      const data = {
        id,
        title: titleValue,
        market: marketValue,
        predict: predictValue,
        target: targetValue,
        description: descriptionValue,
        createdAt,
      };
      putPost(data, uid, idToken).then(() => {
        setAmend(false);
      });
    }
    setAmend(true);
  };

  const cancelAmend = () => {
    setAmend(false);
  };

  return (
    <MainWrap>
      <ActionButtons
        amend={amend}
        clickAmendButton={clickAmendButton}
        cancelAmend={cancelAmend}
      />

      <Form>
        <InputComponent
          title="제목"
          value={titleValue}
          readonly={!amend}
          onChange={(e) => dispatch(changeTitle(e.target.value))}
        />
        <InputComponent
          title="마켓"
          type="radio"
          radioInfo={marketRadioInfo}
          value={marketValue}
          readonly={!amend}
          onChange={(e) => dispatch(changeMarket(e.target.id))}
        />
        <InputComponent
          title="예상"
          type="radio"
          radioInfo={predictRadioInfo}
          value={predictValue}
          readonly={!amend}
          onChange={(e) => dispatch(changePredict(e.target.id))}
        />
        <InputComponent
          title="타겟가"
          value={targetValue.toString()}
          readonly={!amend}
          onChange={(e) => dispatch(changeTarget(e.target.value))}
        />
        <EditorWrap>
          {init === false &&
            (!amend ? (
              <Description>
                <Viewer initialValue={descriptionValue} />
              </Description>
            ) : (
              <Editor
                initialValue={descriptionValue}
                initialEditType="wysiwyg"
                useCommandShortcut={true}
                usageStatistics={false}
                ref={editorRef}
                language="ko"
                height="500px"
                onChange={() => {
                  const content = editorRef.current
                    ?.getInstance()
                    .getMarkdown();
                  dispatch(changeDescription(content));
                }}
              />
            ))}
        </EditorWrap>
      </Form>
    </MainWrap>
  );
};

export default DetailPage;

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const Description = styled.div`
  margin-left: 70px;
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
