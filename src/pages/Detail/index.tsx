import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { isNumber } from 'is-validated';

import { putPost } from '~api/post';
import {
  MARKET,
  marketRadioInfo,
  PREDICT,
  predictRadioInfo,
} from '~models/post.model';

import { fetchPosts } from '~store/post/reducer';
import { selectPostList } from '~store/post/selector';
import {
  amendDescription,
  amendMarket,
  amendPredict,
  amendTarget,
  amendTitle,
  loadAmendContent,
} from '~store/detail/reducer';
import {
  selectAmendDescriptionValue,
  selectAmendId,
  selectAmendMarketValue,
  selectAmendPredictValue,
  selectAmendTargetValue,
  selectAmendTitleValue,
  selectCreatedAt,
} from '~store/detail/selector';
import { selectFirebaseToken, selectUid } from '~store/auth/selector';

import InputComponent from '~components/Input';
import ActionButtons from './ActionButtons';
import Editor from '~components/Editor';
import RadioGroup from '~components/common/RadioGroup';

export interface DetailParams {
  id: string;
}

const DetailPage = () => {
  const params: DetailParams = useParams();
  const dispatch = useDispatch();

  const postsInfo = useSelector(selectPostList);
  const idToken = useSelector(selectFirebaseToken);
  const uid = useSelector(selectUid);

  const id = useSelector(selectAmendId);
  const titleValue = useSelector(selectAmendTitleValue);
  const marketValue = useSelector(selectAmendMarketValue);
  const predictValue = useSelector(selectAmendPredictValue);
  const targetValue = useSelector(selectAmendTargetValue);
  const descriptionValue = useSelector(selectAmendDescriptionValue);
  const createdAtValue = useSelector(selectCreatedAt);

  const [amend, setAmend] = useState<boolean>(false);

  useEffect(() => {
    if (uid && idToken) {
      if (postsInfo.length === 0) {
        dispatch(fetchPosts({ uid, idToken }));
      }
    }
  }, [uid, idToken]);

  useEffect(() => {
    const result = postsInfo.filter((info) => info.id === params.id)[0];
    if (result) {
      dispatch(
        loadAmendContent({
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
        createdAt: createdAtValue,
      };
      putPost(data, uid, idToken).then(() => {
        setAmend(false);
      });
    }
    setAmend(true);
  };

  const cancelAmend = () => {
    dispatch(fetchPosts({ uid, idToken }));
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
          // validation={amend && !!titleValue}
          onChange={(e) => dispatch(amendTitle(e.target.value))}
        />
        <RadioGroup
          title="마켓"
          selection={marketRadioInfo}
          value={marketValue}
          onChange={(e) => dispatch(amendMarket(e.target.id as MARKET))}
          readOnly={!amend}
        />
        <RadioGroup
          title="예상"
          selection={predictRadioInfo}
          value={predictValue}
          onChange={(e) => dispatch(amendPredict(e.target.id as PREDICT))}
          readOnly={!amend}
        />
        <InputComponent
          title="타겟가"
          value={targetValue.toString()}
          readonly={!amend}
          // validation={!amend && !!targetValue}
          onChange={(e) => {
            const { value } = e.target;
            if (!isNumber(value) || value === '') {
              return;
            }
            dispatch(amendTarget(e.target.value));
          }}
        />
        <EditorWrap isAmend={amend}>
          <Editor
            value={descriptionValue}
            onChange={(content) => dispatch(amendDescription(content))}
            readOnly={!amend}
          />
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

const EditorWrap = styled.div<{ isAmend: boolean }>`
  display: flex;
  width: 100%;
  margin: 1rem 0;
  margin-left: ${({ isAmend }) => !isAmend && '7rem'};

  > span {
    display: inline-block;
    width: 7rem;
    text-align: center;
    font-weight: bold;
  }

  > div {
    width: calc(100% - 30rem);
  }

  ${(props) =>
    props.theme.mq.tablet &&
    css`
      > div {
        width: 100%;
      }
    `}

  ${(props) =>
    props.theme.mq.mobile &&
    !props.isAmend &&
    css`
      margin-left: 0rem;
    `}
`;
