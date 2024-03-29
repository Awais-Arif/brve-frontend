import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DeedService } from "../deed.service";
import { ToastService } from "../services/toast.service";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-deed-detail',
  templateUrl: './deed-detail.component.html',
  styleUrls: ['./deed-detail.component.css']
})
export class DeedDetailComponent implements OnInit {

  baseURL = environment.API_URL
  showDeed = false
  showtimeline = false
  selectedDeed!: any;
  storiesList: any = [];
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
      console.log(this.selectedDeed);
      this.getDeeds();
      this.showDeed = true

    }, error => {
      this.toastService.error(error.error.message)
    });
  }

  getDeeds(): void {
    const params = {
      sort: true,
      cardNumber: this.selectedDeed.cardNumber,
      id: this.selectedDeed._id
    }
    this.deedService.getDeeds(params)
      .subscribe((deeds: any) => {
        this.storiesList = deeds;
        this.showtimeline = true
      }, error => {
        console.log(error);
      });
  }

}
