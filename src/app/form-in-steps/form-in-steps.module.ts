import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormInStepsComponent } from './form-in-steps.component';
import { FormInStepsRoutingModule } from './form-in-steps-routing.module';

@NgModule({
  declarations: [
    FormInStepsComponent
  ],
  imports: [
    CommonModule,
    FormInStepsRoutingModule,
    StepsModule,
    ButtonModule,
    ImageModule,
    FileUploadModule,
    HttpClientModule,
    CardModule,
    ReactiveFormsModule,
    InputNumberModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    TableModule,
  ]
})
export class FormInStepsModule { }
