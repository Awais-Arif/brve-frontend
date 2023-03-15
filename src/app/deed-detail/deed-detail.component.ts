import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DeedService} from "../deed.service";
import {ToastService} from "../services/toast.service";

@Component({
  selector: 'app-deed-detail',
  templateUrl: './deed-detail.component.html',
  styleUrls: ['./deed-detail.component.css']
})
export class DeedDetailComponent implements OnInit {

  selectedDeed: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private deedService: DeedService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params && params['id']) {
        this.getDeedDetails(params['id']);
      }
    });
  }

  getDeedDetails(id): void {
    this.deedService.getDeedById(id).subscribe((response: any) => {
      this.selectedDeed = response.deed;
    }, error => {
      this.toastService.error(error.error.message)
    });
  }

}
