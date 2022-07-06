import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormInStepsComponent } from './form-in-steps.component';

const routes: Routes = [{ path: '', component: FormInStepsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormInStepsRoutingModule { }
