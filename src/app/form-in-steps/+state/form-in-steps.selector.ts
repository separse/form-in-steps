import { createSelector } from '@ngrx/store';

const formInStepsState = (state: any) => state['form-in-steps'];
export class FormInStepsSelectors {
  static activeIndex = createSelector(formInStepsState, (state) => state.activeIndex);
  static imageUrl = createSelector(formInStepsState, (state) => state.imageUrl);
  static info = createSelector(formInStepsState, (state) => state.info);
  static person = createSelector(formInStepsState, (state) => state.person);
}
