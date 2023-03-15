import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeedSubmissionComponent } from './deed-submission.component';

describe('DeedSubmissionComponent', () => {
  let component: DeedSubmissionComponent;
  let fixture: ComponentFixture<DeedSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeedSubmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeedSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
