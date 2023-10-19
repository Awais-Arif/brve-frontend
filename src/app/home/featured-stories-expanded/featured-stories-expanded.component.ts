import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DeedService } from 'src/app/deed.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-featured-stories-expanded',
  templateUrl: './featured-stories-expanded.component.html',
  styleUrls: ['./featured-stories-expanded.component.css']
})
export class FeaturedStoriesExpandedComponent implements OnInit {

  hashTags = [];
  storiesList = [];
  showFirst = true;
  baseURL = environment.API_URL;
  constructor(
    private deedsService: DeedService,
    private router: Router,
    private renderer: Renderer2, private elementRef: ElementRef
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
