import { Component, OnInit } from '@angular/core';
import { FormInStepsFacade } from '../../+state/form-in-steps.facade';

@Component({
  selector: 'app-persons-table',
  templateUrl: './persons-table.component.html',
  styleUrls: ['../../form-in-steps.component.scss'],
})
export class PersonsTableComponent implements OnInit {

  person!: any;

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
  ];

  constructor(private facade: FormInStepsFacade) { }

  ngOnInit(): void {
    this.facade.person$.subscribe(res => {
      if(res) this.person = res;
    })
  }

  changeStep(activeIndex: number): void {
    this.facade.selectPerson(this.person);
    this.facade.changeActiveIndex(activeIndex);
  }

}
