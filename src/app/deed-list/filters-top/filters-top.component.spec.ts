import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersTopComponent } from './filters-top.component';

describe('FiltersTopComponent', () => {
  let component: FiltersTopComponent;
  let fixture: ComponentFixture<FiltersTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
