import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Deed } from '../deed.model';

import { DeedService } from '../deed.service';

@Component({
  selector: 'app-deed-list',
  templateUrl: './deed-list.component.html',
  styleUrls: ['./deed-list.component.css'],
  providers: [DeedService]
})
export class DeedListComponent implements OnInit {

  deeds:Deed[];
  selectedDeed: Deed;

  constructor(private deedService: DeedService,
              private router: Router) { }

  ngOnInit(): void {

    this.deedService.getDeeds()
        .subscribe(deeds => {
          this.deeds = deeds;
          console.log(deeds);
          this.deeds.sort(function(a, b){
            let x = a.title.toLowerCase();
            let y = b.title.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
          });
        }, error => {
          console.log(error);
        }); 
        
        this.deedService.sortValue.subscribe((v) => 
        {
          console.log (v, 'value received in list component')
          
          if (v === 'a-z') {
            this.deeds.sort(function(a, b){
              let x = a.title.toLowerCase();
              let y = b.title.toLowerCase();
              if (x < y) {return -1;}
              if (x > y) {return 1;}
              return 0;
            });
          } else if (v === 'z-a') {
            this.deeds.sort(function(a, b){
              let x = a.title.toLowerCase();
              let y = b.title.toLowerCase();
              if (x > y) {return -1;}
              if (x < y) {return 1;}
              return 0;
            });
          }
        })
    
  }

  onSelected(deed: Deed) {
    this.selectedDeed = deed;
    const deedToParse: any = JSON.stringify(this.selectedDeed)
    // const heroId = deed ? deed.id : null;
    this.router.navigate(['/deed-detail', {deed}])
  }
}
