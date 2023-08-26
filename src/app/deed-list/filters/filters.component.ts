import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DeedService } from 'src/app/deed.service';
import { ToastService } from 'src/app/services/toast.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  hashTags = [];
  storiesList = [];
  baseURl = environment.API_URL;
  @Output() selectedHashtag = new EventEmitter();

  constructor(
    private deedsService: DeedService,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getHashTags();
    this.getDeeds();
  }

  getHashTags(): void {
    this.deedsService.getHashTags().subscribe((response: any) => {
      this.hashTags = response.hashTags;
    }, error => {
      this.toastService.error(error.error.message);
    })
  }

  getDeeds(): void {
    const params = {
      limit: 3
    }
    this.deedsService.getDeeds(params)
      .subscribe((deeds: any) => {
        this.storiesList = deeds;
      }, error => {
        console.log(error);
      });
  }
  onSelected(id: any) {
    this.router.navigate(['/deed-detail/' + id]).then()
  }

  selectHashtag(value: any) {
    this.selectedHashtag.emit(value);
  }
}
