import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DeedService } from '../deed.service';
import {UtilService} from "../services/util.service";
import {Router} from "@angular/router";
import {ToastService} from "../services/toast.service";
@Component({
  selector: 'app-deed-submission',
  templateUrl: './deed-submission.component.html',
  styleUrls: ['./deed-submission.component.css']
})
export class DeedSubmissionComponent implements OnInit {

  hashTags = [];
  deedsForm: FormGroup;
  @ViewChild('fileUpload') fileUpload: ElementRef;

  constructor(private fb:FormBuilder,
              private deedsService: DeedService,
              private router: Router,
              private utilService: UtilService,
              private toastService: ToastService
  ) { }

  ngOnInit(): void {
   this.createForm();
   this.getHashTags();
  }

  createForm() {
    this.deedsForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      cardNumber: new FormControl(null, [Validators.required]),
      location: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      title: new FormControl(null, [Validators.required]),
      podcast: new FormControl(null, [Validators.required]),
      whatsHappening: new FormControl(null, [Validators.required]),
      hashTags: new FormControl([]),
      category: new FormControl(''),
    });
  }

  getHashTags(): void {
    this.deedsService.getHashTags().subscribe((response: any) => {
      this.hashTags = response.hashTags;
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
