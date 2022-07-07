import { Action, createReducer, on } from '@ngrx/store';
import { FormInStepsActions } from './form-in-steps.action';
import { IFormInStepsState, initialState } from './form-in-steps.entity';

const formInStepsReduser = createReducer(
  initialState,
  on(FormInStepsActions.changeActiveIndex, (state, { activeIndex }) => ({ ...state, activeIndex })),
  on(FormInStepsActions.uploadImage, (state, { imageUrl }) => ({ ...state, imageUrl })),
  on(FormInStepsActions.fillInfo, (state, { info }) => ({ ...state, info })),
  on(FormInStepsActions.selectPerson, (state, { person }) => ({ ...state, person })),
  /* Reset */
  on(FormInStepsActions.reset, (state) => ({
    ...state,
    activeIndex: 0,
    imageUrl: '',
    info: null,
    person: null,
  }))
);

export const reducer = (state: IFormInStepsState, action: Action) => formInStepsReduser(state, action);
