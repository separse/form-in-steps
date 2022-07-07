import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IFormInStepsState } from './form-in-steps.entity';
import { FormInStepsActions } from './form-in-steps.action';
import { FormInStepsSelectors } from './form-in-steps.selector';

@Injectable()
export class FormInStepsFacade {

  activeIndex$ = this.store.pipe(select(FormInStepsSelectors.activeIndex));
  imageUrl$ = this.store.pipe(select(FormInStepsSelectors.imageUrl));
  info$ = this.store.pipe(select(FormInStepsSelectors.info));
  person$ = this.store.pipe(select(FormInStepsSelectors.person));
  
  constructor(private store: Store<IFormInStepsState>) { }

  changeActiveIndex(activeIndex: number): void {
    this.store.dispatch(FormInStepsActions.changeActiveIndex({ activeIndex }));
  }

  uploadImage(imageUrl: string): any {
    this.store.dispatch(FormInStepsActions.uploadImage({ imageUrl }));
  }

  fillInfo(info: any): any {
    this.store.dispatch(FormInStepsActions.fillInfo({ info }));
  }

  selectPerson(person: any): any {
    this.store.dispatch(FormInStepsActions.selectPerson({ person }));
  }

}
