import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormInStepsFacade } from '../../+state/form-in-steps.facade';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['../../form-in-steps.component.scss'],
})
export class ReviewComponent implements OnInit {
  
  imageUrl$ = this.facade.imageUrl$;
  person$ = this.facade.person$;

  infoForm = this.fb.group({
    amount: [null, Validators.required],
    date: [null, Validators.required],
    status: [null, Validators.required],
    sourceOfFund: [null, Validators.compose([Validators.required, Validators.pattern(/^[a-z]+$/i)])],
  });

  constructor(private fb: FormBuilder, private facade: FormInStepsFacade) { } 

  ngOnInit(): void {
    this.facade.info$.subscribe(res => {
      this.infoForm.setValue(res);
    });
  }

  changeStep(activeIndex: number): void {
    this.facade.changeActiveIndex(activeIndex);
  }

}
