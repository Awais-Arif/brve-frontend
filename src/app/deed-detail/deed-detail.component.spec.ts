import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeedDetailComponent } from './deed-detail.component';

describe('DeedDetailComponent', () => {
  let component: DeedDetailComponent;
  let fixture: ComponentFixture<DeedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeedDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
