import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeedListComponent } from './deed-list.component';

describe('DeedListComponent', () => {
  let component: DeedListComponent;
  let fixture: ComponentFixture<DeedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
