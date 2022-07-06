import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'form-in-steps',
    loadChildren: () => import('./form-in-steps/form-in-steps.module').then((module) => module.FormInStepsModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'form-in-steps',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
