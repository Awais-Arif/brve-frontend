import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DeedService } from '../deed.service';
import {UtilService} from "../services/util.service";
import {Router} from "@angular/router";
import {ToastService} from "../services/toast.service";
import { environment } from 'src/environments/environment';

interface City {
  name: string,
  code: string
}


@Component({
  selector: 'app-deed-submission',
  templateUrl: './deed-submission.component.html',
  styleUrls: ['./deed-submission.component.css']
})
export class DeedSubmissionComponent implements OnInit {
  cities: City[];

    selectedCityCodes: string[];
  hashTags = [];
  deedsForm: FormGroup;
  @ViewChild('fileUpload') fileUpload: ElementRef;

  constructor(private fb:FormBuilder,
              private deedsService: DeedService,
              private router: Router,
              private utilService: UtilService,
              private toastService: ToastService
  ) { 
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  
  }

  ngOnInit(): void {
   this.createForm();
   this.getHashTags();
   console.log (environment.API_URL)
   
  }

  createForm() {
    this.deedsForm = this.fb.group({
      email: new FormControl(null),
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      cardNumber: new FormControl(null),
      location: new FormControl(null),
      image: new FormControl(null),
      title: new FormControl(null ),
      podcast: new FormControl(null, [Validators.required]),
      whatsHappening: new FormControl(null),
      hashTags: new FormControl([]),
      category: new FormControl(''),
    });
  }

  getHashTags(): void {
    this.deedsService.getHashTags().subscribe((response: any) => {
      this.hashTags = response.hashTags;
      console.log(this.hashTags)
    }, error => {
      this.toastService.error(error.error.message);
    })
  }


  onFileSelect(event): void {
    this.deedsForm.get('image').setValue(event.currentFiles[0]);
  }

  onSubmit() {
    if (this.deedsForm.invalid) {
      this.utilService.validateAllFormFields(this.deedsForm);
      return;
    }
    this.deedsService.postDeed(this.deedsForm).subscribe((response: any) => {
      this.toastService.success('Deed created successfully');
      this.router.navigate(['/deed-detail/' + response.deed._id]).then();
    }, error => {
      this.toastService.error(error.error.message);
    });
  }

  
  


}
