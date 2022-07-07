import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormInStepsFacade } from '../../+state/form-in-steps.facade';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['../../form-in-steps.component.scss'],
})
export class InfoFormComponent implements OnInit, OnDestroy {

  today = new Date();
  fiveDaysLater = new Date(this.today.setDate(this.today.getDate() + 5));

  statusList = ['Active', 'Pending', 'Done', 'Canceled'];

  infoForm = this.fb.group({
    amount: [null, Validators.required],
    date: [null, Validators.required],
    status: [null, Validators.required],
    sourceOfFund: [null, Validators.compose([Validators.required, Validators.pattern(/^[a-z]+$/i)])],
  });

  subscription!: Subscription;

  constructor(private fb: FormBuilder, private facade: FormInStepsFacade) { }

  ngOnInit(): void {
    this.subscription = this.facade.info$.subscribe(res => {
      if(res) this.infoForm.setValue(res);
    });
  }

  changeStep(activeIndex: number): void {
    this.facade.fillInfo(this.infoForm.value);
    this.facade.changeActiveIndex(activeIndex);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
