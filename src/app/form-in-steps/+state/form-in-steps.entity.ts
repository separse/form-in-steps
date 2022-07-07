import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const Form_IS_STEPS_FEATURE_KEY = 'form-in-steps';
// state model
export interface IFormInStepsState extends EntityState<any> {
  activeIndex?: number;
  imageUrl?: string;
  info?: any;
  person?: any;
}
/* Partial State */
export interface IFormInStepsPartialState { [Form_IS_STEPS_FEATURE_KEY]: IFormInStepsState }
/* Adapter */
export const formInStepsAdapter: EntityAdapter<any> =createEntityAdapter<any>();
/* Initial State Data */
export const initialState:IFormInStepsState = formInStepsAdapter.getInitialState(
  {
    activeIndex: 0,
    imageUrl: '',
    info: null,
    person: null,
  } as IFormInStepsState
);
