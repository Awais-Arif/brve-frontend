import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import { DeedService } from 'src/app/deed.service';

@Component({
  selector: 'app-filters-top',
  templateUrl: './filters-top.component.html',
  styleUrls: ['./filters-top.component.css'],
})
export class FiltersTopComponent implements OnInit {
  sortingValue = 'a-z';
  limit = '20';
  @Output() emitLimit = new EventEmitter();

  constructor(
    private deedService: DeedService
  ) {}

  ngOnInit(): void {}

  setSorting(e: any) {
    this.deedService.sortValue.next(this.sortingValue);
  }

  onChange(): void {
    this.emitLimit.emit(this.limit);
  }
}
