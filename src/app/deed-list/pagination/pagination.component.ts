import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  deeds = [];
  limit = 20;
  @Input() set setDeeds(deeds) {
    this.deeds = deeds;
  }
  @Input() set setLimit(limit) {
    this.limit = limit;
    console.log(this.limit);
  }
  @Output() currentRecordIndex = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(event): void {
    this.currentRecordIndex.emit(event.first);
  }

}
