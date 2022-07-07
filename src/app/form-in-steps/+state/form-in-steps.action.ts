import { createAction, props } from '@ngrx/store';

export class FormInStepsActions {
  static changeActiveIndex = createAction('[form in steps] change active index', props<{ activeIndex: number }>());
  static uploadImage = createAction('[form in steps] upload image', props<{ imageUrl: string }>());
  static fillInfo = createAction('[form in steps] fill info', props<{ info: any }>());
  static tilesLoaded = createAction('[orm in steps] tiles loaded successfully', props<{ data: any }>());
  static selectPerson = createAction('[form in steps] select person', props<{ person: any }>());
  /* Reset */
  static reset = createAction('[orm in steps] reset parameters');
}
