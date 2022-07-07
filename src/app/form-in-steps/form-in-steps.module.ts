import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormInStepsComponent } from './form-in-steps.component';
import { ReviewComponent } from './components/review/review.component';
import { FormInStepsRoutingModule } from './form-in-steps-routing.module';
import { FormInStepsStateModule } from './+state/form-in-steps-state.module';
import { InfoFormComponent } from './components/info-form/info-form.component';
import { PersonsTableComponent } from './components/persons-table/persons-table.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';

@NgModule({
  declarations: [
    FormInStepsComponent,
    ImageUploaderComponent,
    InfoFormComponent,
    PersonsTableComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    FormInStepsRoutingModule,
    StepsModule,
    CardModule,
    ReactiveFormsModule,
    InputNumberModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    TableModule,
    FormInStepsStateModule,
  ]
})
export class FormInStepsModule { }
