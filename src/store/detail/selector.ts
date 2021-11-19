import { RootState } from '../rootReducer';
import { createSelector } from '@reduxjs/toolkit';

const selectPostDetail = (state: RootState) => state.postDetail;

export const selectAmendTitleValue = createSelector(
  selectPostDetail,
  ({ title }) => title,
);

export const selectAmendMarketValue = createSelector(
  selectPostDetail,
  ({ market }) => market,
);

export const selectAmendPredictValue = createSelector(
  selectPostDetail,
  ({ predict }) => predict,
);

export const selectAmendTargetValue = createSelector(
  selectPostDetail,
  ({ target }) => target,
);

export const selectAmendDescriptionValue = createSelector(
  selectPostDetail,
  ({ description }) => description,
);

export const selectAmendId = createSelector(selectPostDetail, ({ id }) => id);

export const selectCreatedAt = createSelector(
  selectPostDetail,
  ({ createdAt }) => createdAt,
);
