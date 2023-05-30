import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Deed } from 'src/app/deed.model';
import { DeedService } from 'src/app/deed.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  providers: [DeedService]
})
export class ListItemComponent implements OnInit {

  baseURL = environment.API_URL
  @Input() deed: Deed;
  @Input() index: number;

  constructor(private deedService: DeedService) { }

  ngOnInit(): void {
  }

  onSelected(deed: string) {
    this.deedService.deedSelected.emit(this.deed);
  }

}
