import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { isNumber } from 'is-validated';

import { createPost } from '~api/post';
import {
  MARKET,
  marketRadioSelection,
  PREDICT,
  predictRadioSelection,
} from '~models/post.model';
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

import Button from '~components/common/Button';
import Editor from '~components/Editor';
import RadioGroup from '~components/common/RadioGroup';
import InputWithTitle from '~components/common/InputWithTitle';
import InputText from '~components/common/Input/InputText';
import InputWithValidation from '~components/common/InputWithValidation';
import InputNumber from '~components/common/Input/InputNumber';

const WritePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const idToken = useSelector(selectFirebaseToken);
  const uid = useSelector(selectUid);

  const titleValue = useSelector(selectTitleValue);
  const marketValue = useSelector(selectMarketValue);
  const predictValue = useSelector(selectPredictValue);
  const targetValue = useSelector(selectTargetValue);
  const descriptionValue = useSelector(selectDescriptionValue);

  useEffect(() => {
    dispatch(initContent());
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

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <InputWithTitle
        title="제목"
        child={
          <InputWithValidation validate={!!titleValue}>
            <InputText
              onChange={(e) => dispatch(changeTitle(e.target.value))}
            />
          </InputWithValidation>
        }
      />
      <InputWithTitle
        title="마켓"
        child={
          <RadioGroup
            selection={marketRadioSelection}
            value={marketValue}
            onChange={(e) => dispatch(changeMarket(e.target.id as MARKET))}
          />
        }
      />
      <InputWithTitle
        title="예상"
        child={
          <RadioGroup
            selection={predictRadioSelection}
            value={predictValue}
            onChange={(e) => dispatch(changePredict(e.target.id as PREDICT))}
          />
        }
      />
      <InputWithTitle
        title="타겟가"
        child={
          <InputWithValidation validate={!!targetValue}>
            <InputNumber
              value={targetValue}
              onChange={(value) => dispatch(changeTarget(value))}
              min={0}
            />
          </InputWithValidation>
        }
      />
      <EditorWrap>
        <Editor
          value={descriptionValue}
          onChange={(text) => dispatch(changeDescription(text))}
        />
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
