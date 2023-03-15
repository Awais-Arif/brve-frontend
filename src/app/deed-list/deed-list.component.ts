import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Deed} from '../deed.model';

import {DeedService} from '../deed.service';
import {FiltersTopComponent} from "./filters-top/filters-top.component";

@Component({
  selector: 'app-deed-list',
  templateUrl: './deed-list.component.html',
  styleUrls: ['./deed-list.component.css'],
  providers: [DeedService]
})
export class DeedListComponent implements OnInit, AfterViewInit {

  @ViewChild('deedFilter') deedFilter: FiltersTopComponent;
  deeds: any[] = [];
  selectedDeed;
  start = 0;
  end = 20;

  constructor(
    private deedService: DeedService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getDeeds();
  }

  getDeeds(): void {
    this.end = +this.deedFilter.limit;
    this.deedService.getDeeds()
      .subscribe((deeds: any) => {
        this.deeds = deeds;
        if (this.deedFilter.limit === 'all') {
          this.end = this.deeds.length;
        }
        this.deeds.sort(function (a, b) {
          let x = a.title.toLowerCase();
          let y = b.title.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
      }, error => {
        console.log(error);
      });

    this.deedService.sortValue.subscribe((v) => {
      console.log(v, 'value received in list component')

      if (v === 'a-z') {
        this.deeds.sort(function (a, b) {
          let x = a.title.toLowerCase();
          let y = b.title.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
      } else if (v === 'z-a') {
        this.deeds.sort(function (a, b) {
          let x = a.title.toLowerCase();
          let y = b.title.toLowerCase();
          if (x > y) {
            return -1;
          }
          if (x < y) {
            return 1;
          }
          return 0;
        });
      }
    })
  }

  onSelected(deed: Deed) {
    this.selectedDeed = deed;
    this.router.navigate(['/deed-detail/' + this.selectedDeed._id]).then()
  }
}
