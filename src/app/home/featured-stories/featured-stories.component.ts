import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeedService } from 'src/app/deed.service';
import { ToastService } from 'src/app/services/toast.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-featured-stories',
  templateUrl: './featured-stories.component.html',
  styleUrls: ['./featured-stories.component.css']
})
export class FeaturedStoriesComponent implements OnInit {
  hashTags = [];
  storiesList = [];
  baseURL = environment.API_URL;
  constructor(
    private deedsService: DeedService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDeeds()
  }

  getDeeds(): void {
    const params = {
      limit: 4
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

}
