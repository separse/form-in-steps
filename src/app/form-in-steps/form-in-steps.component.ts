import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-form-in-steps',
  templateUrl: './form-in-steps.component.html',
  styleUrls: ['./form-in-steps.component.scss']
})
export class FormInStepsComponent {

  activeIndex = 0;
  maxFileSize = 1000000;
  person!: any;
  imageUrl!: any;

  today = new Date();
  fiveDaysLater = new Date(this.today.setDate(this.today.getDate() + 5));

  statusList = ['Active', 'Pending', 'Done', 'Canceled'];
  personList = [
    {
      code: 10,
      name: 'Daniel Smith',
      position: 'Software Developer',
    },
    {
      code: 16,
      name: 'John Gonzales',
      position: 'HR Specialist',
    },
    {
      code: 17,
      name: 'Lisa Van Bern',
      position: 'CTO',
    },
    {
      code: 20,
      name: 'Nikolay Akinviv',
      position: 'UI/UX Specialist',
    },
    {
      code: 35,
      name: 'Lee Xing',
      position: 'Data Scientist',
    },
  ]
  
  steps: MenuItem[]  = [
    {label: 'Step 1'},
    {label: 'Step 2'},
    {label: 'Step 3'},
    {label: 'Step 4'}
  ];

  step1Form = this.fb.group({
    image: [null, Validators.required],
  });

  step2Form = this.fb.group({
    amount: [null, Validators.required],
    date: [null, Validators.required],
    status: [null, Validators.required],
    sourceOfFund: [null, Validators.compose([Validators.required, Validators.pattern(/^[a-z]+$/i)])],
  });

  step3Form = this.fb.group({
    person: [null, Validators.required],
  });


  constructor(private fb: FormBuilder) { } 

  onSelectFile(e: any): void {
    if (e.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]); // read file as data url
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.imageUrl = event.target.result;
      }
    }
  }

  removeImage(): void {
    this.imageUrl = '';
  }

  changeStep(activeIndex: number): void {
    this.activeIndex = activeIndex;
    console.log(activeIndex);
    
  }
  onRowSelect(event: any) {
    this.step3Form.get('person')?.setValue(event.data);
  }

}
