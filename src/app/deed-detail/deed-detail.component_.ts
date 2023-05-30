import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-deed-detail',
  templateUrl: './deed-detail.component.html',
  styleUrls: ['./deed-detail.component.css']
})
export class DeedDetailComponent implements OnInit {

  baseURL = environment.API_URL
  selectedDeed: any;
  constructor(
  ) { }

  ngOnInit(): void {

  }

}
