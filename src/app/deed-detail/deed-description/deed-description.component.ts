import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deed-description',
  templateUrl: './deed-description.component.html',
  styleUrls: ['./deed-description.component.css']
})
export class DeedDescriptionComponent implements OnInit {

  @Input() deed: any;

  constructor() { }

  ngOnInit(): void {
    this.deed = this.deed
  }

}
