import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormInStepsFacade } from './form-in-steps.facade';
import * as formInStepsReduser from './form-in-steps.reducer';
import { Form_IS_STEPS_FEATURE_KEY } from './form-in-steps.entity';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    StoreModule.forFeature(Form_IS_STEPS_FEATURE_KEY, formInStepsReduser.reducer)
  ],
  providers: [FormInStepsFacade],
})
export class FormInStepsStateModule {}
