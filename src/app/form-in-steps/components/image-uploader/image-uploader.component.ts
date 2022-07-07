import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormInStepsFacade } from '../../+state/form-in-steps.facade';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['../../form-in-steps.component.scss'],
})
export class ImageUploaderComponent implements OnInit {

  imageUrl!: string;
  subscription!: Subscription;

  constructor(private facade: FormInStepsFacade) { }

  ngOnInit(): void {
    this.subscription = this.facade.imageUrl$.subscribe(res => {
      this.imageUrl = res;
    })
  }

  onSelectFile(e: any): void {
    if (e.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]); // read file as data url
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.facade.uploadImage(event.target.result);
      }
    }
  }

  removeImage(): void {
    this.facade.uploadImage('');
  }

  changeStep(activeIndex: number): void {
    this.facade.changeActiveIndex(activeIndex);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
