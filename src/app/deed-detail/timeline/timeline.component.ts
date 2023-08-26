import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() deed: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.deed);

  }

  onSelected(id: any) {
    this.router.navigate(['/deed-detail/' + id]).then()
  }

}
