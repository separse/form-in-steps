import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { tap } from 'rxjs';
import { FormInStepsFacade } from './+state/form-in-steps.facade';

@Component({
  selector: 'app-form-in-steps',
  templateUrl: './form-in-steps.component.html',
  styleUrls: ['./form-in-steps.component.scss']
})
export class FormInStepsComponent implements OnInit {

  activeIndex!: number;

  steps: MenuItem[]  = [
    {label: 'Upload Image'},
    {label: 'Info Form'},
    {label: 'Persons Table'},
    {label: 'Review'}
  ];

  constructor(private facade: FormInStepsFacade) { }

  ngOnInit(): void {
    this.facade.activeIndex$.subscribe(res => {
      this.activeIndex = res;
    })
  }

}
