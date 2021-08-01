import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

const selectWriteState = (state: RootState) => state.write;

export const selectTitleValue = createSelector(
  selectWriteState,
  ({ title }) => title,
);

export const selectMarketValue = createSelector(
  selectWriteState,
  ({ market }) => market,
);

export const selectPredictValue = createSelector(
  selectWriteState,
  ({ predict }) => predict,
);

export const selectTargetValue = createSelector(
  selectWriteState,
  ({ target }) => target,
);

export const selectContentValue = createSelector(
  selectWriteState,
  ({ content }) => content,
);
