import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { FormInStepsFacade } from './+state/form-in-steps.facade';

@Component({
  selector: 'app-form-in-steps',
  templateUrl: './form-in-steps.component.html',
  styleUrls: ['./form-in-steps.component.scss']
})
export class FormInStepsComponent implements OnInit, OnDestroy {

  activeIndex!: number;
  subscription!: Subscription;

  steps: MenuItem[]  = [
    {label: 'Upload Image'},
    {label: 'Info Form'},
    {label: 'Persons Table'},
    {label: 'Review'}
  ];

  constructor(private facade: FormInStepsFacade) { }

  ngOnInit(): void {
    this.subscription = this.facade.activeIndex$.subscribe(res => {
      this.activeIndex = res;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
