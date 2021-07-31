import styled from '@emotion/styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonComponent from '~components/Button';

import InputComponent from '~components/Input';
import { MarketInfo, Predict } from '~models/write.model';
import {
  updateMarket,
  updatePredict,
  updateTarget,
  updateTitle,
} from '~store/write/reducer';
import { selectMarketValue, selectPredictValue } from '~store/write/selector';

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

  const handleSubmit = () => {
    // TODO: 제출 후 액션 지정
  };

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
      <InputComponent title="근거" type="textarea" />

      <ActionWrap>
        {/* <ButtonComponent
          label="작성하기"
          status="active"
          onClick={() => handleSubmit()}
        /> */}
        <input type="submit" />
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

const ActionWrap = styled.div`
  display: flex;
  /* justify-content: flex-end; */

  margin-top: 20px;
`;
