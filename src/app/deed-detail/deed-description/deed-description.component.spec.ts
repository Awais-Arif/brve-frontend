import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeedDescriptionComponent } from './deed-description.component';

describe('DeedDescriptionComponent', () => {
  let component: DeedDescriptionComponent;
  let fixture: ComponentFixture<DeedDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeedDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeedDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
